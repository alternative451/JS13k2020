import { PLAYER_WIDTH, PLAYER_HEIGHT, RED_WIDTH, RED_HEIGHT } from "../config"
import { Pos, Speed, Acc, Controlable, Player, Collidable, BombBag, Agent, Hostile } from "../components"
import { blueAgent, redAgent } from "../draw_helpers"

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
        new Agent(blueAgent),
        new Pos(pos.x, pos.y, pos.z),
        new Speed(0, 0, 0),
        new Acc(0, 0, 0),
        new Controlable(),
        new Player(),
        new Collidable(0, 0, PLAYER_WIDTH, PLAYER_HEIGHT)
    )
}

export const createRed = (ecs, pos, isActive, status) => {
    const red = ecs.create()
    red.add(
        new Hostile(null, null, isActive, status), 
        new Pos(pos.x, pos.y, pos.z), 
        new Agent(redAgent), 
        new Speed(0, 0, 0), 
        new Collidable(0, 0, RED_WIDTH, RED_HEIGHT)
    )
    return red
}


export const isPlayerOverlap = (playerPos, pos, hitBox) => {
    return (
        playerPos.x + PLAYER_WIDTH > pos.x && playerPos.x < pos.x + hitBox.x &&
        playerPos.y + PLAYER_HEIGHT > pos.y && playerPos.y < pos.y + hitBox.y
    )
}
