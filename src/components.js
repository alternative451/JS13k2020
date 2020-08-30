import { Vector } from "./libs/vector"
import { PLAYER_WIDTH, HOSTILE_SPEED, HOSTILE_WIDTH, BOMB_PROPERTIES, PLAYER_HEIGHT, SPAWNER_CD } from "./config"
import { pi2 } from "./libs/utils"

export class Pos extends Vector {}
export class Speed extends Vector {}
export class Acc extends Vector {}

export class Spawn {
    constructor(ecs, max, total) {
        this.cd = SPAWNER_CD
        this.maxHostiles = max
        this.total = total
        this.hostiles = []
        for(let i = 0; i < this.maxHostiles; i ++) {
            let entity = ecs.create()
            this.hostiles.push(entity)
            entity.add(new Hostile(), new Pos(0, 0, 0), new Shape(SMALL_CIRCLE), new Speed(0,0,0), new Collidable(-PLAYER_WIDTH / 2, -PLAYER_HEIGHT / 2, PLAYER_WIDTH / 2, PLAYER_HEIGHT / 2))
        }
    }
    remaining() {
        let remainingAlive = 0
        for(let i = 0; i < this.hostiles.length; i ++) {
            if(this.hostiles[i].get(Hostile).isActive) {
                remainingAlive ++
            }
        }
        return this.total + remainingAlive
    }
    hasOne() {
        for(let i = 0; i < this.hostiles.length; i ++) {
            if(this.hostiles[i].get(Hostile).isActive === false) {
                return this.hostiles[i]
            }
        }
        return false
    }
    active(pos) {
        const hostile = this.hasOne()
        if(hostile) {
            hostile.get(Hostile).isActive = true
            hostile.get(Pos).set(pos)
        }
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
    constructor(sc) {
        this.sc = sc
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
            ctx.fillStyle= "rgba(13, 53, 72, .8)"

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

export class Dead {
    constructor(diedAt) {
        this.diedAt = diedAt
    }
}

export const EXPLODE_TYPE = 1
export class Hostile {
    constructor(target, type) {
        this.target = target
        this.isActive = false
        this.type = type
        this.isAttacking = false
    }
}

export class PreBlast {
    constructor(hostile, at) {
        this.hostile = hostile
        this.at = at
    }
}

export class Player {
    constructor() {
        this.hp = 100
    }
}

export class UI {
    constructor(text, x, y, fn) {
        this.text = text
        this.x = x
        this.y = y
        this.add = (e) => {
            if (Math.abs(e.pageX - x) < 100 && Math.abs(e.pageY - y) < 100) {
                fn()
            }
        }
        window.addEventListener("mousedown", this.add)
    }
    destructor() {
        window.removeEventListener("mousedown", this.add)
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
        this.isDisabled = false
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
        this.disabled = 0
        this.bombSlots = []
        this.isRolling = false
        this.rollAt = -1
        for(let i = 0; i < maxSize; i ++) {
            this.bombSlots.push(new BombSlot(cd))
        }
    }
    isAvailable() {
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if (this.bombSlots[i].isAvailable && !this.bombSlots[i].isDisabled) {
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
            if (this.bombSlots[i].isAvailable && !this.bombSlots[i].isDisabled) {
                return this.bombSlots[i].use()
            }
        }
    }
    initRoll() {
        this.isRolling = true
        this.rollTime = 0
    }
    roll() {
        this.isRolling = false

        for (let i = 0; i < this.bombSlots.length; i++) {
            if (!this.bombSlots[i].isDisabled) {
                this.bombSlots[i].roll()
            }
        }
    }
    disable(ecs, cv) {
        this.disabled ++
        if(this.disabled === this.maxSize) {
           
        }
        for(let i = 0; i < this.bombSlots.length; i ++) {
            if(!this.bombSlots[i].isDisabled) {
                this.bombSlots[i].isDisabled = true
                return
            }
        }
    }
    enable() {
        this.disabled --
        for (let i = 0; i < this.bombSlots.length; i++) {
            if (this.bombSlots[i].isDisabled) {
                this.bombSlots[i].isDisabled = false
                return
            }
        }
    }
}



export class Blast {
    constructor(at) {
        this.at = at
    }
}

export class Door {
    constructor(to) {
        this.to = to
        this.timer = -1
    }
}

