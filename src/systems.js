import { Pos, Controlable, TrialState, Bomb, Hostile, Spawn, Player, Speed, UI, Wall, Collidable, Acc, BombBag, Dead, PreBlast, Blast, Door, Explosion, Agent, Explodable } from "./components"
import { HOSTILE_EFFECT_RELOAD_TIME, HOSTILE_EFFECT_RELOAD, PREBLAST_SFX_LINE_COUNT, BOMB_ARM_RADIUS, PLAYER_SPEED, X_TILE_COUNT, Y_TILE_COUNT, HOSTILE_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION, BLAST_DURATION, PRE_BLAST_DURATION, BLAST_RADIUS, HOSTILE_BOMB_DAMAGE, BOMBAG_ROLL_DURATION, SPAWNER_CD, EXPLOSION_SFX_SIZE, EXPLOSION_SFX_DURATION, ATOMIC_BOMB_TYPE, HOSTILE_FREEZE_TIME, FREEZE_BOMB_TYPE, FLASH_BOMB_TYPE, HOSTILE_DISORIENTED_TIME, HOSTILE_EFFECT_FREEZE, HOSTILE_EFFECT_DISORIENTED, DETECT_BOMB_TYPE, TIME_BOMB_DETONATE_DELAY, TURTLE_BOMB_TYPE, BOMB_COLLISON_RADIUS, HOSTILE_EFFECT_SLEEP, HOSTILE_EFFECT_NONE, RED_WIDTH, RED_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT, HOSTILE_TYPE_PPAOE, HOSTILE_TYPE_RANGE } from "./config"
import { clamp, pi2, isPlayerOverlap } from "./libs/utils"
import { Vector } from "./libs/vector"
import { dieScreen } from "./screens"
import { drawBombCard, drawBomb, deadAgent, redAgent, bombAgent, drawExplodable, drawBombEffect, drawSoil } from "./draw_helpers"

import {astar, Graph} from "./libs/astar"
export const control = (ecs) => {
    const selected = ecs.select(Pos, Controlable, Acc, Speed)
    const bombBagSelector = ecs.select(BombBag)
    let bombAvailable = true

    return {
        update : (dt) => {
            selected.iterate((entity) => {
                const {isUp, isDown, isLeft, isRight, isMain} = entity.get(Controlable)
                const pos = entity.get(Pos)
                const speed = entity.get(Speed)
                const acc = entity.get(Acc)
                acc.setScalar(0)
                if(isUp) {
                    acc.setY(-PLAYER_BASE_ACC)
                } else if (speed.y < 0 && !isDown) { 
                    speed.setY(clamp(PLAYER_BASE_FRICTION + speed.y, -Number.MAX_VALUE, 0))
                }
                if(isDown) {
                    acc.setY(PLAYER_BASE_ACC)
                } else if (speed.y > 0 && !isUp) {
                    speed.setY(clamp(-PLAYER_BASE_FRICTION + speed.y, 0, Number.MAX_VALUE))
                }
                if(isLeft) {
                    acc.setX(-PLAYER_BASE_ACC)
                } else if(speed.x < 0 && !isRight) {
                    speed.setX(clamp(PLAYER_BASE_FRICTION + speed.x, -Number.MAX_VALUE, 0))
                }
                if(isRight) {
                    acc.setX(PLAYER_BASE_ACC)
                } else if(speed.x > 0 && !isLeft) {
                    speed.setX(clamp(-PLAYER_BASE_FRICTION + speed.x, 0, Number.MAX_VALUE))
                }
                speed.add(acc).clampScalar(-PLAYER_SPEED, PLAYER_SPEED)
                
                if (!isMain && !bombAvailable) {
                    bombAvailable = true
                }
                if (isMain && bombAvailable) {
                    bombAvailable = false
                    bombBagSelector.iterate((bombBagEntity) => {
                        const bombBag = bombBagEntity.get(BombBag)
                        if (bombBag.isAvailable()) {
                            const bomb = bombBag.useBomb()
                            ecs
                                .create()
                                .add(
                                    bomb,
                                    new Pos(pos.x + PLAYER_WIDTH / 2, pos.y + PLAYER_HEIGHT / 2, 0),
                                    new Agent(bombAgent)
                                )
                        }
                        
                    })
                    
                }
            })
        }
    }
}

export const drawAgent = (ecs, ctx) => {
    const selectedAgent = ecs.select(Pos, Agent)
    const selectedWalls = ecs.select(Wall)
    return {
        update : (dt) => {
            drawSoil(ctx)
            
            selectedAgent.iterate((entityAgent) => {
                const pos = entityAgent.get(Pos)
                const agent = entityAgent.get(Agent)
                agent.draw(pos.clone().multiplyScalar(tileSize), ctx, agent)
            })

            selectedWalls.iterate((entityWall) => {
                const wall = entityWall.get(Wall)
                ctx.fillStyle = "#030917"
                ctx.fillRect(wall.x * tileSize, wall.y * tileSize, tileSize, tileSize)
            })
            /* add border walls */
            if(selectedWalls.list) {
                ctx.fillRect(0, 0, X_TILE_COUNT * tileSize, tileSize)
                ctx.fillRect(0, (Y_TILE_COUNT - 1) * tileSize, X_TILE_COUNT * tileSize, tileSize)
                ctx.fillRect(0, 0, tileSize, Y_TILE_COUNT * tileSize)
                ctx.fillRect((X_TILE_COUNT - 1) * tileSize, 0, tileSize, Y_TILE_COUNT * tileSize)
            }
           
        }
    }
}


export const liveSpawn = (ecs, ctx) => {
    const selector = ecs.select(Spawn)

    return {
        update: (dt) => {
            selector.iterate((entity) => {
                const pos = entity.get(Pos)
                const spawner = entity.get(Spawn)
                spawner.cd -= dt
                if(spawner.cd <= 0 && spawner.total > 0 && spawner.hasOne()) {
                    spawner.cd = SPAWNER_CD
                    spawner.active(pos)
                    spawner.total --
                } else if(spawner.cd > 0 && spawner.total > 0) {
                    // spawning load
                    ctx.beginPath()
                  //  
                    ctx.closePath()
                    ctx.fillStyle = "rgba(255, 255, 255, .3)"
                    ctx.fill()

                    //const rad = Math.ceil(spawner.cd / SPAWNER_CD * 3)
                    //ctx.fillStyle = rad % 2 === 0 ? "#000" : "#fff"
                    //ctx.fillRect((pos.x * tileSize) - (rad * tileSize / 2), (pos.y * tileSize) - (rad * tileSize / 2),rad * tileSize, rad * tileSize)
                }

                ctx.fillStyle = "#000"
                ctx.fillRect(pos.x * tileSize, pos.y * tileSize , tileSize , tileSize)
            }) 
        }
    }
}

export const ia = (ecs, ctx) => {
    const hostileSelector = ecs.select(Pos, Hostile)
    const playerSelector = ecs.select(Pos, Player)
    const wallSelector = ecs.select(Wall)
    return {
        update : (dt) => {
            const mappedGrid = []
            for(let i = 0; i < X_TILE_COUNT; i ++) {
                mappedGrid[i] = []
                for(let j = 0; j < Y_TILE_COUNT; j ++) {
                    mappedGrid[i].push(1)
                }
            }

            wallSelector.iterate((entityWall) => {
                const wall = entityWall.get(Wall)
                mappedGrid[wall.x][wall.y] = 0
                if(wall.x < X_TILE_COUNT) {
                    mappedGrid[wall.x + 1][wall.y] = 0
                } 
                if(wall.x > 0) {
                    mappedGrid[wall.x - 1][wall.y] = 0
                } 
                if(wall.y < Y_TILE_COUNT) {
                    mappedGrid[wall.x][wall.y + 1] = 0
                } 
                if(wall.y > 0) {
                    mappedGrid[wall.x][wall.y - 1] = 0
                } 
                mappedGrid[wall.x][wall.y] = 0
            })
            
            const graph = new Graph(mappedGrid)

            playerSelector.iterate((playerEntity) => {
                const playerPos = playerEntity.get(Pos) 

                

                hostileSelector.iterate((entity) => {
                    const hostile = entity.get(Hostile)
                    if(hostile.effect) {
                        hostile.effectTime -= dt
                    }
                    if(hostile.effectTime < 0 && hostile.effect) {
                        hostile.effect = false
                    }
                    if (hostile.status === HOSTILE_EFFECT_SLEEP) {
                        return
                    }
                    if (hostile.isActive) {
                        const hostilePos = entity.get(Pos)
                        const hostileSpeed = entity.get(Speed)

                        // move toward player if no attacking
                        if(hostile.isAttacking || hostile.effect === HOSTILE_EFFECT_FREEZE) {
                            hostileSpeed.setScalar(0)
                        } else if(hostile.effect === HOSTILE_EFFECT_DISORIENTED) {
                            // do nothing; TODO may change direction
                        } else if(hostile.type === HOSTILE_TYPE_PPAOE || (hostile.type === HOSTILE_TYPE_RANGE && hostilePos.distance2D(playerPos) > 7)) {
                            let res = []
                            if(hostilePos) {
                                res = astar.search(graph, graph.grid[Math.floor(playerPos.x + .5)][Math.floor(playerPos.y + .5)], 
                                graph.grid[Math.floor(hostilePos.x)][Math.floor(hostilePos.y)])
                        
                            }
                            
                            let nextPos
                            if(res.length > 1) {
                                nextPos = new Pos(res[res.length - 2].x + 0.5, res[res.length - 2].y + 0.5, 0)
                            } else {
                                nextPos = playerPos.clone()
                            }
                            
                            const nextMove = nextPos.sub(hostilePos)
                            hostileSpeed.set(nextMove.normalise().multiplyScalar(HOSTILE_SPEED))
                        } else {
                            hostileSpeed.setScalar(0)
                        }
                        
                        // try an attack
                        if (!hostile.isAttacking && hostile.effect !== HOSTILE_EFFECT_RELOAD) {

                            if (playerPos.distance2D(hostilePos) < 1 && hostile.type === HOSTILE_TYPE_PPAOE &&
                                hostile.effect !== HOSTILE_EFFECT_NONE
                            ) {
                                hostile.isAttacking = true
                                ecs.create()
                                    .add(
                                        new PreBlast(hostile, PRE_BLAST_DURATION, HOSTILE_TYPE_PPAOE),
                                        new Pos(hostilePos.x + RED_WIDTH / 2, hostilePos.y + RED_HEIGHT / 2, hostilePos.z)
                                    )
                            } else if (!hostile.isAttacking && hostile.type === HOSTILE_TYPE_RANGE) {
                                hostile.isAttacking = true
                                ecs.create()
                                    .add(
                                        new PreBlast(hostile, PRE_BLAST_DURATION, HOSTILE_TYPE_RANGE),
                                        new Pos(hostilePos.x + RED_WIDTH / 2, hostilePos.y + RED_HEIGHT / 2, hostilePos.z)
                                    )
                            }
                        }

                    }
                })
            })
        }
    }
}

export const livePreBlast = (ecs, ctx, cv) => {
    const selected = ecs.select(PreBlast)
    const selectedPlayer = ecs.select(Player)
    const bombBagSelector = ecs.select(BombBag)
    const wallSelector = ecs.select(Wall)


    return {
        update : (dt) => {
            selected.iterate((preblasEntity) => {
                const preblast = preblasEntity.get(PreBlast)
                const pos = preblasEntity.get(Pos)

                if (preblast.type === HOSTILE_TYPE_PPAOE) {
                    ctx.beginPath()
                    ctx.arc(pos.x * tileSize, pos.y * tileSize, tileSize * BLAST_RADIUS, 0, pi2)
                    ctx.lineWidth = 2
                    ctx.closePath()
                    ctx.strokeStyle = "#971313"
                    ctx.stroke()
                    const bRadius = tileSize * BLAST_RADIUS
                    const dY = 2 * bRadius / (PREBLAST_SFX_LINE_COUNT + 1)
                    var cosA = Math.cos(1);
                    var sinA = Math.sin(1);
                    for (let i = 0; i < PREBLAST_SFX_LINE_COUNT; i++) {
                        const y = dY * (i + 1) - bRadius
                        const x = Math.sqrt(bRadius * bRadius - y * y)

                        const lX = y * sinA + x *  cosA + pos.x * tileSize
                        const rX = y *  sinA - x *  cosA + pos.x * tileSize
                        const lY = y *  cosA - x *  sinA + pos.y * tileSize
                        const rY = y *  cosA + x *  sinA + pos.y * tileSize
                        

                        ctx.beginPath()
                        ctx.moveTo(lX, lY)
                        ctx.lineTo(rX, rY)
                        ctx.stroke()
                    }
                    ctx.beginPath()
                    ctx.fillStyle = "rgba(245, 88, 21, .3)"
                    ctx.arc(pos.x * tileSize, pos.y * tileSize, (1 - preblast.remaining / PRE_BLAST_DURATION) * tileSize * BLAST_RADIUS, 0, pi2)
                    ctx.fill()
                    preblast.remaining -= dt

                    if (preblast.remaining < 0) {
                        selectedPlayer.iterate((playerEntity) => {
                            const playerPos = playerEntity.get(Pos)
                            const player = playerEntity.get(Player)
                            if (pos.distance2D(playerPos) < BLAST_RADIUS) {
                                player.hp -= HOSTILE_BOMB_DAMAGE
                            }
                        })


                        preblast.hostile.isAttacking = false
                        preblasEntity.eject()
                        ecs.create()
                            .add(
                                new Pos(pos.x, pos.y, pos.z),
                                new Blast(performance.now())
                            )
                    }
                } else { // line blast
                    let foundWall = false
                    ctx.fillStyle = `rgba(255, 0, 0, ${1 - preblast.remaining / PRE_BLAST_DURATION})`
                    let isExplode = false
                    let playerPos
                    let player 
                    preblast.remaining -= dt
                    if (preblast.remaining < 0) {
                        selectedPlayer.iterate((playerEntity) => {
                            playerPos = playerEntity.get(Pos)
                            player = playerEntity.get(Player)
                            isExplode = true
                            preblasEntity.eject()
                        })

                        preblasEntity.eject()
                        preblast.hostile.isAttacking = false
                        preblast.hostile.effect = HOSTILE_EFFECT_RELOAD
                        preblast.hostile.effectTime = HOSTILE_EFFECT_RELOAD_TIME
             
                    }
                    for(let i = Math.floor(pos.x); i < X_TILE_COUNT && !foundWall; i ++) {
                        if(isExplode&&Math.floor(playerPos.x) === i && (Math.floor(playerPos.y) === Math.floor(pos.y) || Math.floor(playerPos.y + 1) === Math.floor(pos.y))) {
                            player.hp -= HOSTILE_BOMB_DAMAGE
                        }
                        ctx.fillRect(i * tileSize, Math.floor(pos.y) * tileSize, tileSize, tileSize)
                
                        wallSelector.iterate((wallEntity) => {
                            const wall = wallEntity.get(Wall)
                            if(i + 1 === wall.x && Math.floor(pos.y) === wall.y ) {
                                foundWall = true
                            }
                        })
                    }
                    foundWall = false
                    for(let i = Math.floor(pos.x); i > 0 && !foundWall; i --) {
                        if(isExplode&&Math.floor(playerPos.x) === i && (Math.floor(playerPos.y) === Math.floor(pos.y) || Math.floor(playerPos.y + 1) === Math.floor(pos.y))) {
                            player.hp -= HOSTILE_BOMB_DAMAGE
                        }
                        ctx.fillRect(i * tileSize, Math.floor(pos.y) * tileSize, tileSize, tileSize)
                
                        wallSelector.iterate((wallEntity) => {
                            const wall = wallEntity.get(Wall)
                            if(i === wall.x + 1 && Math.floor(pos.y) === wall.y ) {
                                foundWall = true
                            }
                        })
                    }

                    
                    
                }
                
            })
        }
    }
}

export const trialDisplay = (ecs, ctx) => {
    const selected = ecs.select(TrialState, Pos)
    const spawnerSelector = ecs.select(Spawn)

    return {
        update: () => {
            let remaining = -1
            spawnerSelector.iterate((spawnerEntities) => {
                remaining += spawnerEntities.get(Spawn).remaining()
            })
            selected.iterate((entity) => {
                const trialState = entity.get(TrialState)
                const pos = entity.get(Pos)
                ctx.textAlign = "center"
                ctx.font = "50px sans-serif"
                ctx.fillStyle = "rgba(100, 170, 220)"
                const txt = trialState.sc.replace("%remain", remaining)
                ctx.fillStyle = "#9E622B"
                ctx.fillText(txt, pos.x * tileSize, pos.y * tileSize)
            })
        }
    }
}

export const liveBombs = (ecs, ctx) => {
    const selected = ecs.select(Bomb)
    const hostileSelected = ecs.select(Hostile, Pos)
    const playerSelected = ecs.select(Player)
    const explodableSelector = ecs.select(Explodable, Pos)

    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(Bomb)
                const pos = entity.get(Pos)
                bomb.remaining -= dt
                // atomic bomb
                drawBombEffect(bomb, pos.clone().multiplyScalar(tileSize), ctx)
                switch(bomb.type) {
                    case ATOMIC_BOMB_TYPE:
                    case FREEZE_BOMB_TYPE:
                    case FLASH_BOMB_TYPE:
                    case DETECT_BOMB_TYPE:
                    case TURTLE_BOMB_TYPE:
                        if(bomb.remaining < 0) {
                            bomb.triggered = false
                            bomb.isArmed = false
                            entity.eject()
                            explodableSelector.iterate((explodableEntity) => {
                                const explodablePos = explodableEntity.get(Pos)
                                const explodable = explodableEntity.get(Explodable)
                                if (explodablePos.distance2D(pos) < bomb.radius) {
                                    explodable.exploded = true
                                }
                            })
                            hostileSelected.iterate((hostileEntity) => {
                                const hostilePos = hostileEntity.get(Pos)
                                const hostileSpeed = hostileEntity.get(Speed)
                                const hostile = hostileEntity.get(Hostile)
                                if(hostile.status === HOSTILE_EFFECT_SLEEP) {
                                    hostile.status = null
                                }
                                
                                if (hostilePos.distance2D(pos) < bomb.radius) {
                                    if(bomb.type === FREEZE_BOMB_TYPE) {
                                        hostile.effect = HOSTILE_EFFECT_FREEZE
                                        hostile.freezeTime = HOSTILE_FREEZE_TIME
                                    } else if(bomb.type === FLASH_BOMB_TYPE) {
                                        hostile.effect = HOSTILE_EFFECT_DISORIENTED
                                        hostile.effectTime = HOSTILE_DISORIENTED_TIME
                                    } else {
                                        hostile.isActive = false
                                        hostile.effect = false
                                        hostileSpeed.setScalar(0)
                                        ecs.create()
                                        .add(
                                            new Agent(deadAgent),
                                            new Dead(performance.now()), 
                                            new Pos(hostilePos.x, hostilePos.y, hostilePos.z)
                                        )
                                    }
                                    
                                }
                            })
                            ecs.create()
                            .add(
                                new Pos(pos.x, pos.y, pos.z),
                                new Explosion(bomb.type)
                                )
        
                        } else if(bomb.type === DETECT_BOMB_TYPE && bomb.triggered === false){
                            hostileSelected.iterate((hostileEntity) => {
                                const hostilePos = hostileEntity.get(Pos)
                                const hostileSpeed = hostileEntity.get(Speed)
                                const hostile = hostileEntity.get(Hostile)
                                
                                if (hostilePos.distance2D(pos) < bomb.radius) { 
                                    bomb.triggered = true
                                    bomb.remaining = TIME_BOMB_DETONATE_DELAY
                                }

                            })
                        } else if(bomb.type === TURTLE_BOMB_TYPE && bomb.triggered === false){
                            playerSelected.iterate((playerEntity) => {
                                const playerPos = playerEntity.get(Pos)
                                const playerSpeed = playerEntity.get(Speed)

                                const aac = playerPos.clone().addScalar(0.5)
                                
                                if (aac.distance2D(pos) < BOMB_COLLISON_RADIUS && bomb.isArmed && !entity.get(Speed)) { 
                                    const speedVector = pos.clone().sub(aac).normalise().multiplyScalar(0.1)
                                    entity.add(new Speed(speedVector.x, speedVector.y, speedVector.z), new Collidable(0,0,.4,.4))
                                }
                                if(aac.distance2D(pos) > BOMB_ARM_RADIUS) {
                                    bomb.isArmed = true
                                }

                            })
                        }
                        break
                    

                }
                
            })
            
        }
    }
}

export const liveDead = (ecs, ctx) => {
    const deadSelector = ecs.select(Dead, Pos)
    return {
        update: () => {
            deadSelector.iterate((deadEndity) => {
                const pos = deadEndity.get(Pos)
                const dead = deadEndity.get(Dead)
                deadAgent(pos, ctx)
            })
        }
    }
}

export const liveUi = (ecs, ctx, cv) => {
    const selected = ecs.select(UI)
    return {
        update: () => {
            selected.iterate((entity) => {
                const ui = entity.get(UI)
                if(ui.isHover) {
                    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
                    ctx.fillRect(0, ui.y - 10, cv.width, 120)
                }
                ctx.font = `${tileSize}px Arial`
                if (ui.isButton) {
                    ctx.fillStyle = "#fff"
                    ctx.fillRect(ui.x, ui.y, 300, 100)
                    ctx.textAlign = "center"
                    ctx.fillStyle = "#000"
                    ctx.fillText(ui.text, ui.x + 150, ui.y + 60)
                } else {
                    ctx.fillStyle = "#000"
                    ctx.fillText(ui.text, ui.x + 150, ui.y + 50)
                }
               
                
            })
        }
    }
}

export const collide = (ecs, ctx) => {
    const selectedCollidable = ecs.select(Collidable, Speed, Pos)
    const selectedWalls = ecs.select(Wall)
    let collided = false
    return {
        update: () => {
            selectedCollidable.iterate((entityCollidable) => {
                const pos = entityCollidable.get(Pos)
                const speed = entityCollidable.get(Speed)
                if(speed.x === 0 && speed.y === 0) {
                    return
                }
                const box = entityCollidable.get(Collidable)
                if (pos.x + box.xMin < 1) {
                    pos.x = -box.xMin + 1
                    speed.x = -speed.x
                }
                if (pos.y + box.yMin < 1) {
                    pos.y = -box.yMin + 1
                    speed.y = -speed.y
                }
                if (pos.x + box.xMax > X_TILE_COUNT - 1 ) {
                    pos.x = X_TILE_COUNT - 1 - box.xMax
                    speed.x = -speed.x
                }
                if (pos.y + box.yMax > Y_TILE_COUNT - 1 ) {
                    pos.y = Y_TILE_COUNT - 1 - box.yMax
                    speed.y = -speed.y
                }
                collided = false
                selectedWalls.iterate((entityWall) => {
                    //AABB 
                    const wall = entityWall.get(Wall)
                    const fPos = pos.clone()
                    fPos.add(speed)
                    if (
                        fPos.x + box.xMax > wall.x  
                        && fPos.x + box.xMax < wall.x + 1) {
                        if (fPos.y + box.yMax > wall.y && fPos.y + box.yMax < wall.y + 1) {
                            // bottom right point collide
                            if(speed.angle() < new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - wall.y).angle()) {
                                // with vertical wall
                                pos.x = wall.x - box.xMax
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            } else {
                                // by horizontal wall
                                pos.y = wall.y -  box.yMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                            }
                        } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                            // top right point collide
                            if(speed.angle() > new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - (wall.y + 1)).angle()) {
                                // with horiztona wall
                                pos.y = wall.y + box.xMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            } else {
                                // with vertical wall
                                pos.x = wall.x - box.xMax
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            }
                        }
                    } else if (fPos.x + box.xMin > wall.x  
                        && fPos.x + box.xMin < (wall.x + 1)) {
                            if (fPos.y + box.yMax > wall.y && fPos.y + box.yMax < wall.y + 1) {
                                // bottom left point collide
                                if(speed.angle() > new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMax) - wall.y).angle()) {
                                    // vertical wall
                                    pos.x = wall.x + 1 + box.xMin
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y - box.yMax
                                    pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                    speed.y = -speed.y
                                    collided = true
                                }
                            } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                                // top left point collide
                                if(speed.angle() < new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMin) - (wall.y + 1)).angle()) { 
                                    // vertical wall
                                    pos.x = wall.x + box.xMax
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y + box.yMax
                                    pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                    speed.y = -speed.y
                                    collided = true
                                }
                            }
                        }
        
                })
                if(!collided) {
                    pos.add(speed)
                }
            })
        }
    }
}

export const liveBombBag = (ecs, ctx, tileSize) => {
    const pos = new Vector(X_TILE_COUNT / 2 * tileSize - 300, Y_TILE_COUNT * tileSize - 50)

    const bombBagSelector = ecs.select(BombBag)
    return {
        update(dt) {
            bombBagSelector.iterate((bombBagEntity) => {
                const bombBag = bombBagEntity.get(BombBag)
                bombBag.rollTime += dt
                
                if(bombBag.rollTime > BOMBAG_ROLL_DURATION && bombBag.isRolling) {
                    bombBag.roll()
                }

                for(let i = 1; i <= bombBag.bombSlots.length; i ++) {
                    let bombSlot = bombBag.bombSlots[i-1]
                    drawBombCard(pos, bombSlot, i, ctx, bombBag.isRolling, bombBag.rollTime / BOMBAG_ROLL_DURATION)
                }

                if (!bombBag.isAvailable() && bombBag.isAllExploded() && !bombBag.isRolling && bombBag.canRoll) {
                    bombBag.initRoll()
                }
            })
            
        }
    }
}

export const liveBlast = (ecs, ctx) => {
    const selector = ecs.select(Blast)
    return {
        update : (dt) => {  
            selector.iterate((blastEntity) => {
                const blast = blastEntity.get(Blast)
                if (performance.now() - blast.at > BLAST_DURATION) {
                    blastEntity.eject()
                    return
                }
                const pos = blastEntity.get(Pos)
                ctx.beginPath()
                ctx.fillStyle = "rgba(200, 30, 30, .7)"
                ctx.arc(pos.x * tileSize, pos.y * tileSize, BLAST_RADIUS * tileSize, 0, pi2)
                ctx.closePath()
                ctx.fill()
            })
        }
    }
}

export const liveDoors = (ecs, ctx) => {
    const doorSelector = ecs.select(Door, Pos)
    const playerSelector = ecs.select(Player, Pos)
    const spawnerSelector = ecs.select(Spawn)
    let remaining = 0
    let hasHostiles = false
    return {
        update: () => {
            remaining = 0
            spawnerSelector.iterate((spawnerEntities) => {
                hasHostiles = true
                remaining += spawnerEntities.get(Spawn).remaining()
            })
            playerSelector.iterate((playerEntity) => {
                
                const playerPos = playerEntity.get(Pos)
                doorSelector.iterate((doorEntity) => {
                    const pos = doorEntity.get(Pos)
                    const isOpen = remaining === 0 && hasHostiles
                    ctx.fillStyle = isOpen ? "#31cd39" : "#9e333d"
                    switch(pos.x) { 
                        case 0://top
                            ctx.fillRect(5 * tileSize, 0 * tileSize, 4 * tileSize, tileSize); break
                        case 1: //right
                            if(isOpen && isPlayerOverlap(playerPos, new Vector(X_TILE_COUNT - 1, 3), new Vector(1, 4))) {
                               window.mapLoader.next()
                               playerPos.x = 1

                            }
                            if(isOpen) {

                           
                                ctx.fillRect((X_TILE_COUNT - 1) * tileSize, 4 * tileSize, tileSize, 4 * tileSize); 
                                    const arrowPos = new Pos((X_TILE_COUNT - 3) * tileSize, 5 * tileSize + tileSize / 2)
                                ctx.beginPath()
                                ctx.moveTo(arrowPos.x, arrowPos.y)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y - tileSize / 2)
                                ctx.lineTo(arrowPos.x + tileSize * 2, arrowPos.y + tileSize / 2)
                                ctx.lineTo(arrowPos.x + tileSize, arrowPos.y + tileSize + tileSize / 2)
                                ctx.lineTo(arrowPos.x +tileSize, arrowPos.y + tileSize) 
                                ctx.lineTo(arrowPos.x, arrowPos.y + tileSize) 
                                ctx.fill()

                            }
                            break
                            
                        case 2: //bottom
                            ctx.fillRect(5 * tileSize, (Y_TILE_COUNT - 1) * tileSize, 4 * tileSize, tileSize); break
                        case 3: //left
                            ctx.fillRect(0 * tileSize, 3 * tileSize, tileSize, 4 * tileSize); break
                    }
                    
                })
            })
        }
    }
}

export const liveHp = (ecs, ctx, cv) => {
    const playerSelector = ecs.select(Player)
    const uiPos = new Vector((X_TILE_COUNT / 2 * tileSize) - 210, 10)

    return {
        update: () => {
            playerSelector.iterate((playerEntity) => {
                const playerComponent = playerEntity.get(Player)
                if(playerComponent.hp <= 0 && window.currentScreen.isGame) {
                    mapLoader.unload(ecs)
                    window.currentScreen.unload()
                    window.currentScreen = dieScreen(ecs, tileSize, cv)
                    window.currentScreen.load()
                } else {
                    ctx.fillStyle = "#000"
                    ctx.fillRect(uiPos.x, uiPos.y, 420, 50)
                    ctx.fillStyle = "red"
                    ctx.fillRect(uiPos.x + 10, uiPos.y + 10, playerComponent.hp * 4, 30)
                    ctx.font='400 22px Arial';
                    ctx.fillStyle = "#000"
                    ctx.fillText("HP", uiPos.x + 17 , uiPos.y + 35)
                    ctx.fillStyle = "#fff"
                    ctx.fillText("HP", uiPos.x + 15, uiPos.y + 33)

                }
            })
        }
    }
}

export const liveExplosions = (ecs, ctx) => {
    const explosionSelector = ecs.select(Explosion, Pos)
    return {
        update: (dt) => {
            explosionSelector.iterate((explosionEntity) => {
                const explosion = explosionEntity.get(Explosion)
                explosion.remaining -= dt
                if(explosion.remaining < 0) {
                    explosionEntity.eject()
                } else {
                    const pos = explosionEntity.get(Pos)

                    switch(explosion.bombType) {
                        case ATOMIC_BOMB_TYPE:
                        case TURTLE_BOMB_TYPE:
                        case DETECT_BOMB_TYPE:
                            explosion.points.forEach(point => {
                                ctx.beginPath()
                                ctx.arc(point.x + pos.x * tileSize, point.y + pos.y * tileSize, EXPLOSION_SFX_SIZE * tileSize, 0, pi2)
                                ctx.fillStyle = `rgba(255,255,255,${ 1 - explosion.remaining / EXPLOSION_SFX_DURATION})`
                                ctx.fill()
                                point.multiplyScalar(1.33)
                            });
                            break
                        case FREEZE_BOMB_TYPE: 
                            ctx.beginPath()
                            ctx.arc(pos.x * tileSize, pos.y * tileSize, 2 * tileSize, 0, pi2)
                            ctx.fillStyle = `rgba(0,0,255,${ 1 - explosion.remaining / EXPLOSION_SFX_DURATION})`
                            ctx.fill()
                            break
                        case FLASH_BOMB_TYPE: 
                            ctx.beginPath()
                            ctx.arc(pos.x * tileSize, pos.y * tileSize, 2 * tileSize, 0, pi2)
                            ctx.fillStyle = `rgba(255,255,255, 1)`
                            ctx.fill()
                            break
                        }

                        
                        // sfx
                        switch(explosion.bombType) {
                            case ATOMIC_BOMB_TYPE:
                            case DETECT_BOMB_TYPE:
                            case TURTLE_BOMB_TYPE:
                                const adv = explosion.remaining / EXPLOSION_SFX_DURATION
                                ctx.beginPath()
                                ctx.arc(pos.x * tileSize, pos.y * tileSize, (1+adv) * tileSize * 2, 0, pi2)
                                ctx.strokeStyle = `rgba(255,255,255,${(adv) * 0.5})`
                                ctx.lineWidth = 4
                                ctx.stroke()
                                ctx.beginPath()
                                ctx.arc(pos.x * tileSize, pos.y * tileSize, (1-adv) * tileSize * 3, 0, pi2)
                                ctx.stroke()
                        }

                    
                }
            })
        }
    }
}

export const liveExplodable = (ecs, ctx) => {
    const explodableSelector = ecs.select(Explodable, Pos)
    return {
        update: (dt) => {
            explodableSelector.iterate((explodableEntity) => {
                const pos = explodableEntity.get(Pos)
                const explodable = explodableEntity.get(Explodable)
                explodable.blink++
                drawExplodable(ctx, pos, explodable)
            })
        }
    }
}