export class Vector {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }
    setX(x) {
        this.x = x
    }
    setY(y) {
        this.y = y
    }
    setZ(z) {
        this.z = z
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z
    }
    dot2D(v) {
       return this.x * v.x + this.y * v.y
    }
    angle() {
        return Math.atan2(- this.y, - this.x) + Math.PI
    }
    setScalar(scalar) {
        this.x = scalar
        this.y = scalar
        this.z = scalar
        return this
    }
    multiplyScalar(scalar) {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar
        return this
    }

    addScalar(scalar) {
        this.x += scalar
        this.y += scalar
        this.z += scalar
        return this
    }

    multiply(v) {
        this.x *= v.x
        this.y *= v.y
        this.z *= v.z
        return this
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1/scalar)
    }
    length() {
        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z )
    }
    clone() {
        return new Vector(this.x, this.y, this.z)
    }
    distance2D(v2) {
        return Math.hypot(this.x - v2.x, this.y - v2.y)   
    }
    clamp(min, max) {
        this.x = Math.max( min.x, Math.min( max.x, this.x ) )
		this.y = Math.max( min.y, Math.min( max.y, this.y ) )
        this.z = Math.max( min.z, Math.min( max.z, this.z ) )
        return this
    }
    clampScalar(minScalar, maxScalar) {
        this.x = Math.max(minScalar, Math.min(maxScalar, this.x))
        this.y = Math.max(minScalar, Math.min(maxScalar, this.y))
        this.z = Math.max(minScalar, Math.min(maxScalar, this.z))
        return this
    }
    add(v) {
        this.x += v.x
        this.y += v.y
        this.z += v.z
        return this
    }
    sub(v) {
        this.x -= v.x
        this.y -= v.y
        this.z -= v.z
        return this
    }
    multiply(v) {
        this.x *= v.x
        this.y *= v.y
        this.z *= v.z
        return this
    }
    normalise() {
        return this.divideScalar(this.length())
    }
    set(v) {
        this.x = v.x
        this.y = v.y
        this.z = v.z
        return this
    }
    toString() {
        return `${x} ${y} ${z}`
    }
}
