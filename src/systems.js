import { Pos, Controlable, TrialState, Bomb, Shape, SQUARE, Hostile, Spawn, SMALL_CIRCLE, Player, Speed, UI, Wall, Collidable, Acc } from "./components"
import { PLAYER_SPEED, X_TILE_COUNT, Y_TILE_COUNT, HOSTILE_SPEED, PLAYER_BASE_ACC, PLAYER_BASE_FRICTION } from "./config"
import { clamp } from "./libs/utils"
import { Vector } from "./libs/vector"

export const control = (ecs) => {
    const selected = ecs.select(Pos, Controlable)
    const trials = ecs.select(TrialState, Controlable)

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
                if(isMain) {
                    ecs
                    .create()
                    .add(
                        new Bomb(3000), 
                        new Pos(pos.x, pos.y, 0), 
                        new Shape(SQUARE)
                    )
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

export const liveBombs = (ecs) => {
    const selected = ecs.select(Bomb)
    const hostileSelected = ecs.select(Hostile, Pos)
    return {
        update: (dt) => {
            selected.iterate((entity) => {
                const bomb = entity.get(Bomb)
                bomb.timer -= dt
                if(bomb.timer < 0) {
                    entity.eject()
                    hostileSelected.iterate((hostileEntity) => {
                        
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
                if (pos.x - box.xMax > X_TILE_COUNT ) {
                    pos.x = X_TILE_COUNT + box.xMax
                    speed.x = -speed.x
                }
                if (pos.y - box.yMax > Y_TILE_COUNT ) {
                    pos.y = Y_TILE_COUNT + box.yMax
                    speed.y = -speed.y
                }
                selectedWalls.iterate((entityWall) => {
                    //AABB 
                    return
                    const pos = entityCollidable.get(Pos)
                    const box = entityCollidable.get(Collidable)
                    const wall = entityWall.get(Wall)
                    if (pos.x + box.xMin < wall.x && pos.x) {
                        pos.x = -box.xMin + wall.x
                    }
                    if (pos.y + box.yMin < 0) {
                        pos.y = -box.yMin
                    }
                    if (pos.x + box.xMax > X_TILE_COUNT) {
                        pos.x = X_TILE_COUNT + box.xMax
                    }
                    if (pos.y - box.yMax > Y_TILE_COUNT) {
                        pos.y = Y_TILE_COUNT + box.yMax
                    }
                    

                    
                })
            })
        }
    }
}
