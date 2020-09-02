import { Pos, Controlable, TrialState, Bomb, Shape, SQUARE, Hostile, Spawn, SMALL_CIRCLE, Player, Speed, UI, Wall, Collidable, Acc, BombBag, Dead, PreBlast, Blast, Door, Explosion } from "./components"
import { PLAYER_SPEED, X_TILE_COUNT, Y_TILE_COUNT, HOSTILE_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION, BLAST_DURATION, PRE_BLAST_DURATION, BLAST_RADIUS, HOSTILE_BOMB_DAMAGE, BOMBAG_ROLL_DURATION, SPAWNER_CD, EXPLOSION_SFX_SIZE, EXPLOSION_SFX_DURATION } from "./config"
import { clamp, pi2, isPlayerOverlap } from "./libs/utils"
import { Vector } from "./libs/vector"
import { dieScreen } from "./screens"
import { drawBombCard, drawBomb } from "./draw_helpers"

export const control = (ecs) => {
    const selected = ecs.select(Pos, Controlable, Acc, Speed)
    const trials = ecs.select(TrialState, Controlable)
    const bombBagSelector = ecs.select(BombBag)
    let bombAvailable = true

    return {
        update : (dt) => {

            trials.iterate((entity) => {
                const {isUp, isDown} = entity.get(Controlable)
                if(isUp) {
                    entity.get(TrialState).isUpPressed = true
                }
                if(isDown) {
                    entity.get(TrialState).isDownPressed = true
                }
            })

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
                                    new Pos(pos.x, pos.y, 0),
                                    new Shape(SQUARE)
                                )
                        }
                        
                    })
                    
                }
            })
        }
    }
}

export const draw = (ecs, ctx) => {
    const selectedShape = ecs.select(Pos, Shape)
    const selectedWalls = ecs.select(Wall)
    return {
        update : (dt) => {
            selectedShape.iterate((entityShape) => {
                const pos = entityShape.get(Pos)
                const shape = entityShape.get(Shape)
                shape.draw(ctx, pos.clone().multiplyScalar(tileSize), tileSize)
            })

            selectedWalls.iterate((entityWall) => {
                const wall = entityWall.get(Wall)
                ctx.fillStyle = ""
                ctx.fillRect(wall.x * tileSize, wall.y * tileSize, tileSize, tileSize)
            })
            ctx.fillRect(0,0,X_TILE_COUNT * tileSize, tileSize)
            ctx.fillRect(0,Y_TILE_COUNT * tileSize, X_TILE_COUNT * tileSize, tileSize)
            ctx.fillRect(0, tileSize, tileSize, (Y_TILE_COUNT - 1) * tileSize)
            ctx.fillRect((X_TILE_COUNT - 1) * tileSize, tileSize, tileSize, (Y_TILE_COUNT - 1) * tileSize)

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
                    ctx.arc(pos.x * tileSize, pos.y * tileSize, spawner.cd / SPAWNER_CD * 20 + 10, 0, pi2)
                    ctx.closePath()
                    ctx.fillStyle = "rgba(255, 255, 255, .3)"
                    ctx.fill()
                }

                ctx.beginPath()
                ctx.arc(pos.x * tileSize, pos.y * tileSize, 10, 0, pi2)
                ctx.closePath()
                ctx.fillStyle = spawner.total > 0 ? "rgba(255, 255, 255, .3)" : "rgba(0, 0, 0, .3)"
                ctx.fill()
            }) 
        }
    }
}

export const ia = (ecs) => {
    const hostileSelector = ecs.select(Pos, Hostile)
    const playerSelector = ecs.select(Pos, Player)
    return {
        update : (dt) => {
            playerSelector.iterate((playerEntity) => {
                const playerPos = playerEntity.get(Pos) 
                hostileSelector.iterate((entity) => {
                    const hostile = entity.get(Hostile)
                    if (hostile.isActive) {
                        const hostilePos = entity.get(Pos)
                        const hostileSpeed = entity.get(Speed)

                        // move toward player if no attacking
                        if(!hostile.isAttacking) {
                            const d = playerPos.clone()
                            const b = d.sub(hostilePos)
                            hostileSpeed.set(b.normalise().multiplyScalar(HOSTILE_SPEED))
                        } else {
                            hostileSpeed.setScalar(0)
                        }
                        

                        // try an attack
                        if (playerPos.distance2D(hostilePos) < 1 && !hostile.isAttacking) {
                            hostile.isAttacking = true
                            ecs.create()
                                .add(
                                    new PreBlast(hostile, performance.now()),
                                    new Pos(hostilePos.x, hostilePos.y, hostilePos.z)
                                )
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

    return {
        update : () => {
            selected.iterate((preblasEntity) => {
                const preblast = preblasEntity.get(PreBlast)
                const pos = preblasEntity.get(Pos)
                ctx.beginPath()
                ctx.arc(pos.x * tileSize, pos.y * tileSize, tileSize * BLAST_RADIUS, 0, pi2)
                ctx.fillStyle = "rgba(200,200,200, .4)"
                ctx.closePath()
                ctx.fill()
                if (performance.now() - preblast.at > PRE_BLAST_DURATION ) {
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
            })
        }
    }
}

export const trialDisplay = (ecs, ctx) => {
    const selected = ecs.select(TrialState, Pos)
    return {
        update : (dt) => {
            selected.iterate((entity) => {
                const trialState = entity.get(TrialState)
                const pos = entity.get(Pos)
                ctx.textAlign = "center"
                ctx.font = "50px sans-serif"
                ctx.fillStyle = "rgba(100, 170, 220)"
                ctx.fillText(trialState.sc, pos.x * tileSize, pos.y * tileSize)
            })
        }
    }
}

export const liveBombs = (ecs, ctx) => {
    const selected = ecs.select(Bomb)
    const hostileSelected = ecs.select(Hostile, Pos)
    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(Bomb)
                const pos = entity.get(Pos)
                bomb.remaining -= dt
      
                drawBomb(bomb, pos.clone().multiplyScalar(tileSize), ctx)
                if(bomb.remaining < 0) {
                    entity.eject()
                    hostileSelected.iterate((hostileEntity) => {
                        const hostilePos = hostileEntity.get(Pos)
                        const hostileSpeed = hostileEntity.get(Speed)
                        const hostile = hostileEntity.get(Hostile)
                        if (hostilePos.distance2D(pos) < bomb.radius) {
                            hostile.isActive = false
                            hostileSpeed.setScalar(0)

                            ecs.create()
                            .add(
                                new Dead(performance.now()), 
                                new Pos(hostilePos.x, hostilePos.y, hostilePos.z)
                            )
                        }
                    })
                    ecs.create()
                    .add(
                        new Pos(pos.x, pos.y, pos.z),
                        new Explosion()
                        )

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

                ctx.fillStyle = "#eee"
                ctx.beginPath()
                ctx.arc(pos.x * tileSize, pos.y * tileSize, 10, 0, pi2)
                ctx.closePath()
                ctx.fill()
            })
        }
    }
}

export const liveUi = (ecs, ctx) => {
    const selected = ecs.select(UI)
    return {
        update: () => {
            selected.iterate((entity) => {
                const ui = entity.get(UI)
                ctx.fillText(ui.text, ui.x, ui.y)
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
                if (pos.x - box.xMax > X_TILE_COUNT - 2 ) {
                    pos.x = X_TILE_COUNT - 2 + box.xMax
                    speed.x = -speed.x
                }
                if (pos.y - box.yMax > Y_TILE_COUNT - 1 ) {
                    pos.y = Y_TILE_COUNT - 1 + box.yMax
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
                            if(speed.angle() > new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - wall.y).angle() && speed.y > 0) {
                                // with vertical wall
                                pos.y = wall.y + box.yMin
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            } else {
                                // by horizontal wall
                                pos.x = wall.x + box.xMin
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            }
                        } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                            // top right point collide
                            if(speed.angle() > new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - (wall.y + 1)).angle()) {
                                // with horiztona wall
                                pos.y = wall.y + 1 + box.xMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            } else {
                                // with vertical wall
                                pos.x = wall.x + box.xMin
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
                                    pos.x = wall.x + 1 + box.xMax
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y + box.yMin
                                    pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                    speed.y = -speed.y
                                    collided = true
                                }
                            } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                                // top left point collide
                                if(speed.angle() < new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMin) - (wall.y + 1)).angle()) { 
                                    // vertical wall
                                    pos.x = wall.x + 1 + box.xMax
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    // hozizontal wall
                                    pos.y = wall.y + 1 + box.xMax
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

                if (!bombBag.isAvailable() && bombBag.isAllExploded() && !bombBag.isRolling) {
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
    let remaining = -1
    return {
        update: () => {
            remaining = -1
            spawnerSelector.iterate((spawnerEntities) => {
                remaining += spawnerEntities.get(Spawn).remaining()
            })
            playerSelector.iterate((playerEntity) => {
                
                const playerPos = playerEntity.get(Pos)
                doorSelector.iterate((doorEntity) => {
                    const pos = doorEntity.get(Pos)
                    const isOpen = remaining === 0 || remaining === -1
                    ctx.fillStyle = isOpen ? "#31cd39" : "#9e333d"

                    switch(pos.x) { 
                        case 0://top
                            ctx.fillRect(5 * tileSize, 0 * tileSize, 4 * tileSize, tileSize); break
                        case 1: //right
                            if(isOpen && isPlayerOverlap(playerPos, new Vector(X_TILE_COUNT - 1, 3), new Vector(1, 4))) {
                               window.mapLoader.next()
                               playerPos.x = 1

                            }
                            ctx.fillRect((X_TILE_COUNT - 1) * tileSize, 3 * tileSize, tileSize, 4 * tileSize); break
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

export const liveHp = (ecs, ctx) => {
    const playerSelector = ecs.select(Player)
    const uiPos = new Vector((X_TILE_COUNT / 2 * tileSize) - 210, 20)

    return {
        update: () => {
            playerSelector.iterate((playerEntity) => {
                const playerComponent = playerEntity.get(Player)
                if(playerComponent.hp <= 0) {
                    mapLoader.unload(ecs)
                    window.currentScreen = dieScreen(ecs, tileSize)
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
                ctx.fillStyle = `rgba(255,255,255,${ 1 - explosion.remaining / EXPLOSION_SFX_DURATION})`
                if(explosion.remaining < 0) {
                    explosionEntity.eject()
                } else {
                    const pos = explosionEntity.get(Pos)
                    explosion.points.forEach(point => {
                        ctx.beginPath()
                        ctx.arc(point.x + pos.x * tileSize, point.y + pos.y * tileSize, EXPLOSION_SFX_SIZE * tileSize, 0, pi2)
                        ctx.fill()
                        point.multiplyScalar(1.33)
                    });
                }
            })
        }
    }
}
