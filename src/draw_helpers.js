
import { pi2 } from "./libs/utils"

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
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, bomb.radius * tileSize, 0, pi2)
    ctx.closePath()
    ctx.lineWidth = 2
    ctx.strokeStyle = "#ffbd18"
    ctx.stroke()

    
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
    ctx.lineTo(pos.x, pos.y - (bomb.radius * tileSize))
    ctx.arc(pos.x, pos.y, bomb.radius * tileSize, -Math.PI / 2,  -Math.PI / 2 + (bomb.total - bomb.remaining) / bomb.total * pi2)
    ctx.lineTo(pos.x, pos.y)
    ctx.fill()
}

export const drawAgent = (pos, ctx, agent) => {
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, agent.size * tileSize, agent.size * tileSize)
    ctx.fillStyle = agent.color
    ctx.fillRect(pos.x * tileSize + 2, pos.y * tileSize + 2, agent.size * tileSize - 4, agent.size * tileSize - 4)
}

export const drawEyes = (pos, ctx, eye) => {

}