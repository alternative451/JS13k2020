import { Vector } from "./libs/vector"
import { PLAYER_WIDTH, HOSTILE_SPEED, HOSTILE_WIDTH, BOMB_PROPERTIES } from "./config"
import { pi2 } from "./libs/utils"

export class Pos extends Vector {}
export class Speed extends Vector {}
export class Acc extends Vector {}

export class Spawn {
    constructor() {
        this.cd = 3000
        this.maxHostiles = 3
    }
    
}

const Z = 90
const W = 87
const Q = 81
const A = 65
const S = 83
const D = 68
const ESPACE = 32
export class Controlable {
    
    constructor() {
        this.isUp = false
        this.isLeft = false
        this.isRight = false
        this.isDown = false
        this.isMain = false

        window.addEventListener("keydown", (event) => {
            if(event.keyCode === Z || event.keyCode === W) {
                this.isUp = true
            }
            if(event.keyCode === ESPACE) {
                this.isMain = true
            }
            if(event.keyCode === Q || event.keyCode === A) {
                this.isLeft = true
            }
            if(event.keyCode === D) {
                this.isRight = true
            }
            if(event.keyCode === S) {
                this.isDown = true
            }
        })
        window.addEventListener("keyup", (event) => {
            if(event.keyCode === Z || event.keyCode === W) {
                this.isUp = false
            }
            if(event.keyCode === ESPACE) {
                this.isMain = false
            }
            if(event.keyCode === Q || event.keyCode === A) {
                this.isLeft = false
            }
            if(event.keyCode === D) {
                this.isRight = false
            }
            if(event.keyCode === S) {
                this.isDown = false
            }
        })
    }
}

export class TrialState {
    constructor() {
        this.isUpPressed = false
        this.isDownPressed = false
    }
}

export class Bomb {
    constructor(timer, radius) {
        this.timer = timer
        this.radius = radius
    }
}

export class Cooldown {
    constructor(timer) {

    }
}

export const CIRCLE = 0
export const SQUARE = 1
export const SMALL_CIRCLE = 2
export class Shape {
    constructor(shape) {
        this.draw = (ctx, pos, tileSize) => {
            ctx.fillStyle= "#134"

            if(shape === CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, PLAYER_WIDTH * tileSize / 2, 0, pi2)
                ctx.fill()
                ctx.closePath()
            } else if(shape === SMALL_CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, HOSTILE_WIDTH * tileSize / 4, 0, pi2)
                ctx.closePath()
                ctx.fill()
            } else {
                ctx.stroke()
                ctx.fillRect(pos.x - 8, pos.y - 8, 16, 16)
            }
        }
    }
}

export class Hostile {
    constructor(target) {
        this.target = target
    }
}

export class Player {}

export class UI {
    constructor(text, x, y, fn) {
        this.text = text
        this.x = x
        this.y = y
        window.addEventListener("mousedown", (e) => {
            if(Math.abs(e.pageX - x) < 100 && Math.abs(e.pageY - y) < 100) {
                fn()
            } 
        })
    }
}

export class Collidable {
    constructor(xMin, yMin, xMax, yMax) {
        this.xMin = xMin
        this.yMin = yMin
        this.xMax = xMax
        this.yMax = yMax
    }
} 

export class Wall extends Vector {}

export class BombSlot {
    constructor(cd) {
        this.cd = cd
        this.isAvailable = true
        this.roll()
        this.bomb = null
    }
    use() {
        const properties = BOMB_PROPERTIES[this.type]
        this.bomb = new Bomb(properties.timer, properties.radius)
        this.isAvailable = false
        return this.bomb
    }
    roll() {
        this.type = Math.floor(Math.random() * 6)
        this.isAvailable = true
    }
}

export class BombBag {
    constructor(maxSize, cd) {
        this.maxSize = maxSize 
        this.bombSlots = []
        for(let i = 0; i < maxSize; i ++) {
            this.bombSlots.push(new BombSlot(cd))
        }
    }
    isAvailable() {
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if(this.bombSlots[i].isAvailable) {
                return true
            }
        }
        return false
    }
    isAllExploded() {
        for (let i = 0; i < this.bombSlots.length; i++) {
            if (!this.bombSlots[i].bomb) {
                return false
            }
        }
        for(let i = 0; i < this.bombSlots.length; i++) {
             if(this.bombSlots[i].bomb.timer > 0) {
                 return false
             }
        }
        return true
    }
    useBomb() {
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if(this.bombSlots[i].isAvailable) {
                return this.bombSlots[i].use()
            }
        }
    }
    roll() {
        for (let i = 0; i < this.bombSlots.length; i++) {
            this.bombSlots[i].roll()
        }
    }
}
