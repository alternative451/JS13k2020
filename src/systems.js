import { Pos, Controlable, TrialState } from "./components"

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
                const {isUp, isDown} = entity.get(Controlable)
                if(isUp) {
                    entity.get(Pos).y--
                }
                if(isDown) {
                    entity.get(Pos).y++
                }
            })
        }
    }
}


export const draw = (ecs, ctx) => {
    const selected = ecs.select(Pos)
 
    return {

        update : (dt) => {
            selected.iterate((entity) => {
                const pos  = entity.get(Pos)
                ctx.fillStyle= "#134"
                ctx.fillRect(pos.x, pos.y, 10,10)
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
