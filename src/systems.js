import { Pos, Controlable, TrialState, Bomb, Shape, SQUARE, Hostile, Spawn, SMALL_CIRCLE, Player } from "./components"
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
                if(isUp) {
                    entity.get(Pos).y--
                }
                if(isDown) {
                    entity.get(Pos).y++
                }
                if(isLeft) {
                    entity.get(Pos).x--
                }
                if(isRight) {
                    entity.get(Pos).x++
                }
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


export const draw = (ecs, ctx) => {
    const selected = ecs.select(Pos, Shape)
 
    return {

        update : (dt) => {
            selected.iterate((entity) => {
                const pos = entity.get(Pos)
                const shape = entity.get(Shape)
                shape.draw(ctx, pos)
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
                    spawner.maxHostiles ++
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
                    const n = b.normalise().multiplyScalar(0.5)
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