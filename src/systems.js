import { Pos, Controlable, TrialState, Bomb, Shape, SQUARE, Hostile, Spawn, SMALL_CIRCLE, Player, Speed, UI, Wall, Collidable, Acc, Items, BombSac, BombBag } from "./components"
import { PLAYER_SPEED, X_TILE_COUNT, Y_TILE_COUNT, HOSTILE_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION } from "./config"
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
                pos.add(speed)
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
    return {
        update: (dt) => {
            selector.iterate((entity) => {
                const pos = entity.get(Pos)
                const spawner = entity.get(Spawn)
                spawner.cd -= dt
                if(spawner.cd < 0 && spawner.maxHostiles > 0) {
                    spawner.maxHostiles --
                    spawner.cd = 3000
                    ecs.create()
                        .add(new Hostile(), new Pos(pos.x, pos.y, pos.z), new Shape(SMALL_CIRCLE))
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
                    const hostilePos = entity.get(Pos)
                    const d = playerPos.clone()
                    const b = d.sub(entity.get(Pos))
                    const n = b.normalise().multiplyScalar(HOSTILE_SPEED)
                    hostilePos.add(n)
                })
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
                        if (hostilePos.distance2D(pos) < bomb.radius) {
                            hostileEntity.eject()
                        }
                    })
                }
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

export const collide = (ecs) => {
    const selectedCollidable = ecs.select(Collidable, Speed, Pos)
    const selectedWalls = ecs.select(Wall)
    
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
                selectedWalls.iterate((entityWall) => {
                    //AABB 
                    const wall = entityWall.get(Wall)
                    const fPos = pos.clone()
                    // -->|
                    if (pos.x + box.xMax > wall.x  
                        && pos.x + box.xMax < wall.x + 1 
                        && ((pos.y + box.yMax > wall.y && pos.y + box.yMax < wall.y + 1) || 
                        (pos.y + box.yMin > wall.y && pos.y + box.yMin < wall.y + 1))) {
                        fPos.x = box.xMin + wall.x
                        speed.x = -speed.x
                    }
                    //  |<--
                    if (pos.x + box.xMin > wall.x 
                        && pos.x + box.xMin < wall.x + 1
                        && ((pos.y + box.yMax > wall.y && pos.y + box.yMax < wall.y + 1) ||
                            (pos.y + box.yMin > wall.y && pos.y + box.yMin < wall.y + 1))) {
                            fPos.x = box.xMax + wall.x + 1
                            speed.x = -speed.x
                    }
                    // __
                    // /\
                    if(pos.y + box.yMin > wall.y
                        && pos.y + box.yMin < wall.y + 1
                        && ((pos.x + box.xMin > wall.x && pos.x + box.xMin < wall.x + 1) || 
                        (pos.x + box.xMax > wall.x && pos.x + box.xMax < wall.x + 1))) {
                        fPos.y = box.xMax + wall.y + 1
                            speed.y = -speed.y
                        }
                    //  v
                    // ---
                    if(pos.y + box.xMax > wall.y 
                        && pos.y + box.xMax < wall.y + 1
                        && ((pos.x + box.xMin > wall.x && pos.x + box.xMin < wall.x + 1) ||
                            (pos.x + box.xMax > wall.x && pos.x + box.xMax < wall.x + 1))) {
                        fPos.y = box.xMin + wall.y
                        speed.y = -speed.y
                    }
                    pos.set(fPos)
                    

                    
                })
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
                    ctx.fillRect(cv.width - i * 105, cv.height - 100, 100, 100)
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
