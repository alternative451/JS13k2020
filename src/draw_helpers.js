
import { pi2 } from "./libs/utils"
import { EYE_LINE, HOSTILE_TYPE_RANGE,ATOMIC_BOMB_TYPE, FLASH_BOMB_TYPE, FREEZE_BOMB_TYPE, DETECT_BOMB_TYPE, TURTLE_BOMB_TYPE, PLAYER_WIDTH, PLAYER_HEIGHT, X_TILE_COUNT, Y_TILE_COUNT, EYE_DEAD, EYE_BLUE, EYE_RED, HOSTILE_EFFECT_SLEEP } from "./config"

const square = (uiPos, ctx, x, y, i, color) => {
    ctx.fillStyle = color
    ctx.fillRect(uiPos.x + i * 90 + (x + 1)* 10, uiPos.y + (y + 1) * 10, 10, 10)
}

export const drawBombCard = (pos, bombSlot, i, ctx, isRolling, rollingRatio) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x + i * 90, pos.y, 100, 100)
    ctx.fillStyle = bombSlot.isAvailable ? "#010C14" : "#470605"
    ctx.fillRect(pos.x + i * 90 + 10, pos.y + 10, 80, 80)
    
    if(isRolling) {
        ctx.fillStyle = "rgba(30, 130, 30, 1)"
        ctx.fillRect(pos.x + i * 90 + 10, pos.y + 10, 80 * rollingRatio, 80)
    }
    ctx.fillStyle = "#000"
    switch(bombSlot.type) {
        case ATOMIC_BOMB_TYPE:
            square(pos, ctx, 1,0,i,"#D98A14")
            square(pos, ctx, 1,1,i,"#F0740A")
            square(pos, ctx, 4,1,i,"#D98A14")
            square(pos, ctx, 5,1,i,"#E64F09")
            square(pos, ctx, 7,2,i,"#F0AB0A")

            square(pos, ctx, 3,3,i,"#F0AB0A")
            square(pos, ctx, 4,3,i,"#F0AB0A")
            square(pos, ctx, 3,4,i,"#F0AB0A")
            square(pos, ctx, 4,4,i,"#F0AB0A")

            square(pos, ctx, 1, 4,i,"#D98A14")
            square(pos, ctx, 2, 7,i,"#F0740A")
            square(pos, ctx, 3, 7,i,"#D98A14")
            square(pos, ctx, 5, 6,i,"#F0AB0A")
            square(pos, ctx, 5, 7,i,"#E64F09")

            break
        case FREEZE_BOMB_TYPE:
            square(pos, ctx, 2,1,i,"#8CC1E9")
            square(pos, ctx, 2,3,i,"#8CC1E9")
            square(pos, ctx, 2,4,i,"#8CC1E9")
            square(pos, ctx, 2,6,i,"#8CC1E9")
            square(pos, ctx, 2,7,i,"#8CC1E9")

            square(pos, ctx, 0, 3,i,"#8CC1E9")
            square(pos, ctx, 0, 5,i,"#8CC1E9")
            square(pos, ctx, 1, 5,i,"#8CC1E9")
            square(pos, ctx, 0, 7,i,"#8CC1E9")

            square(pos, ctx, 3,5,i,"#8CC1E9")
            square(pos, ctx, 4,5,i,"#8CC1E9")
            square(pos, ctx, 6,5,i,"#8CC1E9")

            square(pos, ctx, 5,2,i,"#8CC1E9")
            square(pos, ctx, 4,3,i,"#8CC1E9")
            square(pos, ctx, 4,7,i,"#8CC1E9")
            break
        
        case DETECT_BOMB_TYPE:
            square(pos, ctx, 3,3,i,"#B11913")
            square(pos, ctx, 3,4,i,"#B11913")
            square(pos, ctx, 4,3,i,"#B11913")
            square(pos, ctx, 4,4,i,"#B11913")

            square(pos, ctx, 2,1,i,"#B11913")
            square(pos, ctx, 1,2,i,"#B11913")
            square(pos, ctx, 1,3,i,"#B11913")
            square(pos, ctx, 1,4,i,"#B11913")
            square(pos, ctx, 1,5,i,"#B11913")
            square(pos, ctx, 2,6,i,"#B11913")

            square(pos, ctx, 5,1,i,"#B11913")
            square(pos, ctx, 6,2,i,"#B11913")
            square(pos, ctx, 6,3,i,"#B11913")
            square(pos, ctx, 6,4,i,"#B11913")
            square(pos, ctx, 6,5,i,"#B11913")
            square(pos, ctx, 5,6,i,"#B11913")

            break
        case TURTLE_BOMB_TYPE:
            square(pos, ctx, 1,3,i,"#97E614")
            square(pos, ctx, 1,4,i,"#97E614")
            square(pos, ctx, 2,3,i,"#97E614")
            square(pos, ctx, 2,4,i,"#97E614")

            square(pos, ctx, 4,4,i,"#97E614")
            square(pos, ctx, 6,4,i,"#97E614")
            break
        case 5:
            
            break 
    }
}

export const drawBombEffect = (bomb, pos, ctx) => {
    // area
    ctx.lineWidth = 2
    
    switch(bomb.type) {
        case ATOMIC_BOMB_TYPE:
            ctx.strokeStyle = "#ffbd18"; break
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
    ctx.arc(pos.x, pos.y, bomb.radius * tileSize / 2, -Math.PI / 2,  -Math.PI / 2 + (bomb.total - bomb.remaining) / bomb.total * pi2)
    ctx.strokeStyle = "rgba(255, 255, 255, .3)"
    ctx.lineWidth = tileSize / 2
    ctx.stroke()
}

export const blueAgent = (pos, ctx, agent) => { // you
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, PLAYER_WIDTH * tileSize, PLAYER_HEIGHT * tileSize)
    ctx.fillStyle = "#2e5fee"
    ctx.fillRect(pos.x + 2, pos.y + 2, PLAYER_WIDTH * tileSize - 4, PLAYER_HEIGHT * tileSize - 4)
    drawEyes(pos, ctx, EYE_BLUE)
}

export const redAgent = (pos, ctx, hostile) => {
    if (hostile.effect === HOSTILE_EFFECT_SLEEP) {
        drawSleep(pos, ctx)
    }
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x, pos.y, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = "#C73F33"
    ctx.fillRect(pos.x + 2, pos.y + 2, 1 * tileSize - 4, 1 * tileSize - 4)
    drawEyes(pos, ctx, hostile.type === HOSTILE_TYPE_RANGE ? EYE_LINE : EYE_RED)
}

export const deadAgent = (pos, ctx, agent) => { 
    ctx.fillStyle = "#fff"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, 1 * tileSize, 1 * tileSize)
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x * tileSize + 2, pos.y * tileSize + 2, 1 * tileSize - 4, 1 * tileSize - 4)
    drawEyes(pos.clone().multiplyScalar(tileSize), ctx, EYE_DEAD)
}

export const bombAgent = (pos, ctx, agent) => {
    ctx.fillStyle = "#fff"
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, .5 * tileSize, 0, pi2)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = "#000"
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, .5 * tileSize - 2, 0, pi2)
    ctx.closePath()
    ctx.fill()
}

export const drawExplodable = (ctx, pos, explodableEntity) => {
    ctx.fillStyle = "#040B0F"
    ctx.fillRect(pos.x * tileSize, pos.y * tileSize, tileSize, tileSize)
    ctx.beginPath()
    ctx.rect(pos.x * tileSize + 2, pos.y * tileSize + 2, tileSize - 4, tileSize -4)
    ctx.strokeStyle = explodableEntity.exploded ? "#444" : "#C21111"
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.beginPath()
    ctx.rect(pos.x * tileSize - 10, pos.y * tileSize -10, tileSize +20, tileSize +20)
    ctx.strokeStyle = "#9E4D06"
    ctx.lineWidth = 2
    ctx.stroke()
}

export const drawPowup = (pos, ctx) => {
    ctx.fillStyle = "#000"
    ctx.fillRect(pos.x, pos.y, tileSize, tileSize)
    ctx.beginPath()
    ctx.moveTo(pos.x + tileSize / 4, pos.y + tileSize / 4)
    ctx.lineTo(pos.x + tileSize / 2, pos.y + tileSize / 2)
    ctx.lineTo(pos.x + tileSize * (3 / 4), pos.y + tileSize / 4)
    ctx.lineTo(pos.x + tileSize * (3 / 4), pos.y + tileSize / 2)
    ctx.lineTo(pos.x + tileSize / 2, pos.y + tileSize * ( 3 / 4))
    ctx.lineTo(pos.x + tileSize / 4, pos.y + tileSize / 2)
    ctx.fillStyle = "green"


    ctx.closePath()
    ctx.fill()
}

export const drawEyes = (pos, ctx, eye) => {
    if (eye === EYE_DEAD) {
        ctx.strokeStyle = "#FFF"
        ctx.moveTo(pos.x + .2 * tileSize, pos.y + .2 * tileSize)
        ctx.lineTo(pos.x + .3 * tileSize, pos.y + .3 * tileSize)
        ctx.stroke()
        ctx.moveTo(pos.x + .2 * tileSize, pos.y + .3 * tileSize)
        ctx.lineTo(pos.x + .3 * tileSize, pos.y + .2 * tileSize)
        ctx.stroke()
        ctx.moveTo(pos.x + .7 * tileSize, pos.y + .2 * tileSize)
        ctx.lineTo(pos.x + .8 * tileSize, pos.y + .3 * tileSize)
        ctx.stroke()
        ctx.moveTo(pos.x + .7 * tileSize, pos.y + .3 * tileSize)
        ctx.lineTo(pos.x + .8 * tileSize, pos.y + .2 * tileSize)
        ctx.stroke()
        ctx.closePath()
    } else if(eye === EYE_LINE) {
        ctx.fillStyle = "red"
        ctx.fillRect((pos.x), (pos.y + .2 * tileSize), tileSize, tileSize / 4)
        ctx.fillStyle = "#000"
        ctx.fillRect((pos.x + .1 * tileSize), (pos.y + .2 * tileSize), tileSize / 5, tileSize / 5)
        ctx.fillRect((pos.x + .7 * tileSize), (pos.y + .2 * tileSize), tileSize / 5, tileSize / 5)
    } else {
        ctx.fillStyle = "#000"

        ctx.fillRect((pos.x + .1 * tileSize), (pos.y + .2 * tileSize), tileSize / 5, tileSize / 5)
        ctx.fillRect((pos.x + .7 * tileSize), (pos.y + .2 * tileSize), tileSize / 5, tileSize / 5)
    }
}

export const drawSleep = (pos, ctx) => {
    ctx.fillStyle = "#fff"
    ctx.fillText("Zzz", pos.x - 10, pos.y - 10)
}

export const drawSoil = (ctx) => {
    ctx.fillStyle = "#754E38"
    ctx.fillRect(0,0,X_TILE_COUNT * tileSize, Y_TILE_COUNT * tileSize)
}