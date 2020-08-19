export const clamp = (val, min, max) => {
    return Math.max(min, Math.min(max, val))
}

export const pi2 = Math.PI * 2

console.log(clamp(1, 0, 2))