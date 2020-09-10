import { Vector } from "./libs/vector"
import { PLAYER_WIDTH, HOSTILE_SPEED, HOSTILE_WIDTH, PLAYER_HEIGHT, SPAWNER_CD , EXPLOSION_SFX_COUNT, BOMB_PROPERTIES_TIMER, BOMB_PROPERTIES_RADIUS, EXPLOSION_SFX_DURATION, FREEZE_BOMB_TYPE, FLASH_BOMB_TYPE, DETECT_BOMB_TYPE, BOMB_PROPERTIES_MAX_TIMER, TURTLE_BOMB_TYPE, HOSTILE_TYPE_RANGE } from "./config"
import { pi2, createRed } from "./libs/utils"
import { redAgent } from "./draw_helpers"

export class Pos extends Vector {}
export class Speed extends Vector {}
export class Acc extends Vector {}

export class Spawn {
    constructor(ecs, max, total, type) {
        this.type = type
        this.cd = SPAWNER_CD
        this.maxHostiles = max
        this.total = total
        this.hostiles = []

        for(let i = 0; i < this.maxHostiles; i ++) {
            this.hostiles.push(createRed(ecs, new Pos(0, 0, 0), false, null, type))
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
    constructor(type, time, radius) {
        this.triggered = false
        this.armed = false
        this.type = type
        this.remaining = time
        this.total = time
        this.radius = radius
    }
}


export const CIRCLE = 0
export const SQUARE = 1
export const SMALL_CIRCLE = 2
export class Agent {
    constructor(draw) {
        this.draw = draw
    }
}

export class Dead {
    constructor(diedAt) {
        this.diedAt = diedAt
    }
}

export const EXPLODE_TYPE = 1
export class Hostile {
    constructor(target, type, isActive, effect) {
        this.target = target
        this.hp = 100
        this.isActive = isActive
        this.type = type
        this.isAttacking = false
        this.effect = effect
        this.effectTime = 10 * 1000
    }
}

export class PreBlast {
    constructor(hostile, remaining, type) {
        this.hostile = hostile
        this.type = type
        this.remaining = remaining
    }
}

export class Player {
    constructor() {
        this.hp = 100
    }
}

export class UI {
    constructor(text, x, y, fn, isButton) {
        this.text = text
        this.x = x
        this.y = y
        this.isButton = isButton
        this.isHover = false
        this.add = (e) => {
            if (e.pageY > y && e.pageY < y + 150 ) {
                fn()
            }
        }
        this.move = (e) => {
            if (e.pageY > y && e.pageY < y + 150 ) {
                this.isHover = true
            } else {
                this.isHover = false
            }
        }
        if(this.isButton) {
            window.addEventListener("mousedown", this.add)
            window.addEventListener("mousemove", this.move)
        }
    }
    destructor() {
        if(this.isButton) {
            window.removeEventListener("mousedown", this.add)
        }
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
        this.bomb = new Bomb(this.type, (this.type === DETECT_BOMB_TYPE || this.type === TURTLE_BOMB_TYPE) ? BOMB_PROPERTIES_MAX_TIMER : BOMB_PROPERTIES_TIMER, BOMB_PROPERTIES_RADIUS)
        this.isAvailable = false
        return this.bomb
    }
    roll() {
        this.type = Math.floor(Math.random() * 5)
        this.isAvailable = true
    }
    set(bomb) {
        this.type = bomb
        this.isAvailable = true
    }
}

export class BombBag {
    constructor(maxSize, cd) {
        this.maxSize = maxSize 
        this.disabled = 0
        this.bombSlots = []
        this.isRolling = false
        this.canRoll = true
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

    set(bombs) {
        bombs.forEach((bomb, i) => {
            this.bombSlots[i].set(bomb)
        })
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

export class Explosion {
    constructor(bombType) {
        this.remaining = EXPLOSION_SFX_DURATION
        this.points = []
        this.bombType = bombType

        for(let i = 0; i < EXPLOSION_SFX_COUNT; i++) {
            const angle = Math.random() * pi2
            this.points.push(new Vector(Math.cos(angle), Math.sin(angle)))
        }
    }
}

// 19

export class Particle {}

export class Eyes {}

export class Status {}

export class Explodable {
    constructor() {
        this.blink = 0
        this.exploded = false
    }
}

