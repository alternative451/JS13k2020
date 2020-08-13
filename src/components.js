import { Vector } from "./libs/vector"

export class Pos extends Vector {}
export class Speed extends Vector {}
export class Acc extends Vector {}

export class Spawn {
    constructor() {
        this.cd = 3000
        this.maxHostiles = 3
    }
    
}

const pi2 = Math.PI * 2


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
    constructor(timer) {
        this.timer = timer
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
        this.draw = (ctx, pos) => {
            ctx.fillStyle= "#134"

            if(shape === CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, 16, 0, pi2)
                ctx.fill()
                ctx.closePath()
            } else if(shape === SMALL_CIRCLE) {
                ctx.beginPath()
                ctx.arc(pos.x, pos.y, 8, 0, pi2)
                ctx.closePath()
                ctx.fill()
            } else {
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
