export class Pos {
    constructor(x, y, z) {
        this.x = x
        this.y = y 
        this.z = z
    }
}



export class Controlable {
    constructor() {
        this.isUp = false
        this.isDown = false
        window.addEventListener("keydown", (event) => {
            if(event.key === "ArrowUp") {
                this.isUp = true
            }
            if(event.key === "ArrowDown") {
                this.isDown = true
            }
        })
        window.addEventListener("keyup", (event) => {
            if(event.key === "ArrowUp") {
                this.isUp = false
            }
            if(event.key === "ArrowDown") {
                this.isDown = false
            }
        })
    }
}
