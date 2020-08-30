import { PLAYER_WIDTH, PLAYER_HEIGHT } from "../config"
import { Shape, CIRCLE, Pos, Speed, Acc, Controlable, Player, Collidable, BombBag, HpBar } from "../components"

export const clamp = (val, min, max) => {
    return Math.max(min, Math.min(max, val))
}

export const pi2 = Math.PI * 2

export const createPlayer = (ecs, pos) =>  {
    ecs.create() 
    .add(
        new BombBag(3, 3000)
    )
    ecs
    .create()
    .add(
        new Shape(CIRCLE),
        new Pos(pos.x, pos.y, pos.z),
        new Speed(0, 0, 0),
        new Acc(0, 0, 0),
        new Controlable(),
        new Player(),
        new Collidable(-PLAYER_WIDTH / 2, -PLAYER_HEIGHT / 2, PLAYER_WIDTH / 2, PLAYER_HEIGHT / 2)
    )
   
}


export const isPlayerOverlap = (playerPos, pos, hitBox) => {
    return (playerPos.x + PLAYER_WIDTH > pos.x && playerPos.x < pos.x + hitBox.x
        && playerPos.y > pos.y && playerPos.y < pos.y + hitBox.y)
}
