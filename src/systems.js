import { Pos, Controlable, TrialState, Bomb, Shape, SQUARE, Hostile, Spawn, SMALL_CIRCLE, Player, Speed, UI, Wall, Collidable, Acc, Items, BombSac, BombBag, Dead, PreBlast, Blast } from "./components"
import { PLAYER_SPEED, X_TILE_COUNT, Y_TILE_COUNT, HOSTILE_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION, BLAST_DURATION, PRE_BLAST_DURATION, BLAST_RADIUS } from "./config"
import { clamp, pi2 } from "./libs/utils"
import { Vector } from "./libs/vector"

export const control = (ecs) => {
    const selected = ecs.select(Pos, Controlable)
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

export const draw = (ecs, ctx, tileSize) => {
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
                ctx.fillRect(wall.x * tileSize, wall.y * tileSize, tileSize, tileSize)
            })
        }
    }
}


export const liveSpawn = (ecs) => {
    const selector = ecs.select(Spawn)
    const hostileSelector = ecs.select(Hostile)

    return {
        update: (dt) => {
            selector.iterate((entity) => {
                const pos = entity.get(Pos)
                const spawner = entity.get(Spawn)
                spawner.cd -= dt
                if(spawner.cd < 0) {
                    spawner.cd = 3000
                    let oneCreated = false
                    hostileSelector.iterate((hostileEntity) => {
                        const hostile = hostileEntity.get(Hostile)
                        if (!hostile.isActive && !oneCreated) {
                            hostile.isActive = true
                            const hpos = hostileEntity.get(Pos)
                            hpos.set(pos)
                            oneCreated = true

                        }
                    })

                } 
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
                            hostilePos.add(hostileSpeed)
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

export const livePreBlast = (ecs, ctx, tileSize, cv) => {
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
                        if (pos.distance2D(playerPos) < BLAST_RADIUS) {
                            bombBagSelector.iterate((bombBagEntity) => {
                                bombBagEntity.get(BombBag).disable(ecs, cv)
                            })
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
    const selected = ecs.select(TrialState)
    return {
        update : (dt) => {
            selected.iterate((entity) => {
                if(!entity.get(TrialState).isUpPressed && !entity.get(TrialState).isUpPressed) {
                    ctx.fillText("Press Up", 10, 50)
                } else if(entity.get(TrialState).isDownPressed&&entity.get(TrialState).isUpPressed) {
                    ctx.fillText("Good Dog !", 10, 50)
                } else if(entity.get(TrialState).isUpPressed) {
                    ctx.fillText("Press DOWN", 10, 50)
                }
            })
        }
    }
}

export const liveBombs = (ecs, ctx, tileSize) => {
    const selected = ecs.select(Bomb)
    const hostileSelected = ecs.select(Hostile, Pos)
    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(Bomb)
                const pos = entity.get(Pos)
                bomb.timer -= dt
                const x = pos.x * tileSize
                const y = pos.y * tileSize
                ctx.beginPath()
                ctx.arc(x, y, bomb.radius * tileSize, 0, pi2)
                ctx.closePath()
                ctx.stroke()
                ctx.fillText(Math.ceil(bomb.timer / 1000), x, y - 20)

                if(bomb.timer < 0) {
                    entity.eject()
                    hostileSelected.iterate((hostileEntity) => {
                        const hostilePos = hostileEntity.get(Pos)
                        const hostile = hostileEntity.get(Hostile)
                        if (hostilePos.distance2D(pos) < bomb.radius) {
                            hostile.isActive = false

                            ecs.create()
                            .add(
                                new Dead(performance.now()), 
                                new Pos(hostilePos.x, hostilePos.y, hostilePos.z)
                                
                            )
                        }
                    })
                }
            })
            
        }
    }
}

export const liveDead = (ecs, ctx, tileSize) => {
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
                const box = entityCollidable.get(Collidable)
                if (pos.x + box.xMin < 0) {
                    pos.x = -box.xMin
                    speed.x = -speed.x
                }
                if (pos.y + box.yMin < 0) {
                    pos.y = -box.yMin
                    speed.y = -speed.y
                }
                if (pos.x - box.xMax > X_TILE_COUNT - 1 ) {
                    pos.x = X_TILE_COUNT - 1 + box.xMax
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
                            if(speed.angle() < new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMax) - wall.y).angle()) {
                                // by top of the wall
                                pos.y = wall.y + box.yMin
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            } else {
                              // by right of the wall
                                pos.x = wall.x + box.xMin
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            }
                        } else if(fPos.y + box.yMin > wall.y && fPos.y + box.yMin < wall.y + 1) {
                            // top right point collide
                            if(speed.angle() < new Vector((fPos.x + box.xMax) - wall.x, (fPos.y + box.yMin) - (wall.y + 1)).angle()) {
                               // with vertical wall
                                pos.x = wall.x + box.xMin
                                pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                speed.x = -speed.x
                                collided = true
                            } else {
                                // by bottom of the wall
                                pos.y = wall.y + 1 + box.xMax
                                pos.x += speed.x * ((fPos.y - pos.y)  / speed.y)
                                speed.y = -speed.y
                                collided = true
                            }
                        }
                    } else if (fPos.x + box.xMin > wall.x  
                        && fPos.x + box.xMin < (wall.x + 1)) {
                            if (fPos.y + box.yMax > wall.y && fPos.y + box.yMax < wall.y + 1) {
                                // bottom left point collide
                                if(speed.angle() < new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMax) - wall.y).angle()) {
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
                                ctx.beginPath()
                                const a  = new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMin) - (wall.y + 1))
                                ctx.strokeStyle = "red"
                                ctx.moveTo(400, 400)
                                console.log(speed.angle(), a.angle())
                                ctx.lineTo(400 +  speed.x * 200, 400 + speed.y * 200)
                                ctx.stroke()
                                ctx.closePath()
                                if(-speed.angle() > new Vector((fPos.x + box.xMin) - (wall.x + 1), (fPos.y + box.yMin) - (wall.y + 1)).angle()) { 
                                    console.log("vert")
                                    // vertical wall
                                    pos.x = wall.x + 1 + box.xMax
                                    pos.y += speed.y * ((fPos.x - pos.x)  / speed.x)
                                    speed.x = -speed.x
                                    collided = true
                                } else {
                                    console.log("hoz")
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

export const liveBombBag = (ecs, ctx, cv) => {
    const bombBagSelector = ecs.select(BombBag)
    return {
        update() {
            bombBagSelector.iterate((bombBagEntity) => {
                const bombBag = bombBagEntity.get(BombBag)
                for(let i = 1; i <= bombBag.bombSlots.length; i ++) {
                    let bombSlot = bombBag.bombSlots[i-1]
                    ctx.fillStyle = bombSlot.isDisabled ? "rgba(200, 30, 30, .5)" : "rgba(30, 130, 30, .5)"
                    ctx.fillRect(cv.width - i * 105, cv.height - 100, 100, 100)
                    ctx.fillStyle = "#000"
                    ctx.fillText(bombSlot.isAvailable, cv.width - i * 105, cv.height - 100)
                    ctx.fillText(bombSlot.type, cv.width - i * 105, cv.height - 110)
                }
                if (!bombBag.isAvailable() && bombBag.isAllExploded()) {
                    bombBag.roll()
                }
            })
            
        }
    }
}

export const liveBlast = (ecs, ctx, tileSize) => {
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