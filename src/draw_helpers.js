
import { pi2 } from "./libs/utils"
import { ATOMIC_BOMB_TYPE, FLASH_BOMB_TYPE, FREEZE_BOMB_TYPE, DETECT_BOMB_TYPE, TURTLE_BOMB_TYPE,PLAYER_WIDTH, PLAYER_HEIGHT } from "./config"

const dot = (ctx, x, y) => {
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, pi2)
    ctx.closePath()
    ctx.fill()
}

export const drawBombCard = (pos, bombSlot, i, ctx, isRolling, rollingRatio) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x + i * 105, pos.y, 100, 100)
    ctx.fillStyle = bombSlot.isAvailable ? "rgba(30, 130, 30, 1)" : "rgba(200, 30, 30, 1)"
    ctx.fillRect(pos.x + i * 105 + 10, pos.y + 10, 80, 80)
    
    if(isRolling) {
        ctx.fillStyle = "rgba(30, 130, 30, 1)"
        ctx.fillRect(pos.x + i * 105 + 10, pos.y + 10, 80 * rollingRatio, 80)
    }
    ctx.fillStyle = "#000"
    switch(bombSlot.type) {
        case 0:
            dot(ctx, pos.x + i*105 + 50, pos.y + 50)
            break
        case 1:
            dot(ctx, pos.x + i*105 + 30, pos.y + 30)
            dot(ctx, pos.x + i*105 + 70, pos.y + 70) 
            break
        case 2:
            dot(ctx, pos.x + i*105 + 30, pos.y + 30)
            dot(ctx, pos.x + i*105 + 50, pos.y + 50)
            dot(ctx, pos.x + i*105 + 70, pos.y + 70)
            break
        case 3:
            dot(ctx, pos.x + i*105 + 30, pos.y + 30)
            dot(ctx, pos.x + i*105 + 70, pos.y + 30)
            dot(ctx, pos.x + i*105 + 30, pos.y + 70)
            dot(ctx, pos.x + i*105 + 70, pos.y + 70)
            break
        case 4:
            dot(ctx, pos.x + i*105 + 50, pos.y + 50)
            dot(ctx, pos.x + i*105 + 30, pos.y + 30)
            dot(ctx, pos.x + i*105 + 70, pos.y + 30)
            dot(ctx, pos.x + i*105 + 30, pos.y + 70)
            dot(ctx, pos.x + i*105 + 70, pos.y + 70)
            break
        case 5:
            dot(ctx, pos.x + i*105 + 30, pos.y + 30)
            dot(ctx, pos.x + i*105 + 30, pos.y + 50)
            dot(ctx, pos.x + i*105 + 30, pos.y + 70)
            dot(ctx, pos.x + i*105 + 70, pos.y + 30)
            dot(ctx, pos.x + i*105 + 70, pos.y + 50)
            dot(ctx, pos.x + i*105 + 70, pos.y + 70)
            break 
    }
}

export const drawBomb = (bomb, pos, ctx) => {
    // area
    ctx.lineWidth = 2
    switch(bomb.type) {
        case ATOMIC_BOMB_TYPE:
            ctx.strokeStyle = "#ffbd18"; break
        case FLASH_BOMB_TYPE:
            ctx.strokeStyle = "#fff"; break
        case FREEZE_BOMB_TYPE:
            ctx.strokeStyle = "#00f"; break
        case DETECT_BOMB_TYPE:
            ctx.strokeStyle = "#f00"; break
        case TURTLE_BOMB_TYPE:
            ctx.strokeStyle = "#0f0"; break
    }
    
    const sides = 16
    const radius = bomb.radius * tileSize + 5
    ctx.beginPath()
    ctx.moveTo (pos.x +  radius * Math.cos(0), pos.y +  radius *  Math.sin(0))     
    for (let i = 1; i <= sides;i ++) {
        ctx.lineTo (pos.x + radius * Math.cos(i * 2 * Math.PI / sides), pos.y + radius * Math.sin(i * 2 * Math.PI / sides))
    }
    ctx.lineWidth = 1
    ctx.closePath()
    ctx.stroke()
    
    // time
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
    ctx.lineTo(pos.x, pos.y - (bomb.radius * tileSize / 2))
    ctx.arc(pos.x, pos.y, bomb.radius * tileSize / 2, -Math.PI / 2,  -Math.PI / 2 + (bomb.total - bomb.remaining) / bomb.total * pi2)
    ctx.lineTo(pos.x, pos.y)
    ctx.fill()
}

export const blueAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, PLAYER_WIDTH * tileSize, PLAYER_HEIGHT * tileSize)
    ctx.fillStyle = "#00f"
    ctx.fillRect(pos.x + 2, pos.y + 2, PLAYER_WIDTH * tileSize - 4, PLAYER_HEIGHT * tileSize - 4)
}

export const redAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#f00"
    ctx.fillRect(pos.x, pos.y, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = agent.color
    ctx.fillRect(pos.x + 2, pos.y + 2, 1 * tileSize - 4, 1 * tileSize - 4)
}

export const deadAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = agent.color
    ctx.fillRect(pos.x + 2, pos.y + 2, 1 * tileSize - 4, 1 * tileSize - 4)
}

export const bombAgent = (pos, ctx, agent) => {
    ctx.fillStyle = "#f00"
    ctx.fillRect(pos.x, pos.y, 0.5 * tileSize, .5 * tileSize)
    ctx.fillStyle = agent.color
    ctx.fillRect(pos.x + 2, pos.y + 2, .5 * tileSize - 4, .5 * tileSize - 4)
}

export const drawExplodable = (ctx, pos, explodableEntity) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, tileSize, tileSize)
  //  ctx.beginPath()
  //  ctx.rect(tileSize * pos.x + 10, tileSize * pos.y, tileSize - 20, tileSize - 20)
   // ctx.strokeStyle = rgba(0, 255, 255, Math.cos(explodableEntity.blink / 1000))
   // ctx.stroke()
}

export const drawEyes = (pos, ctx, eye) => {

}