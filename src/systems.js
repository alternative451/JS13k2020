import { Pos, Controlable } from "./components"

export const control = (ecs) => {
    const selected = ecs.select(Pos, Controlable)

    return {
        update : (dt) => {
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