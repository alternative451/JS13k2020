export const clamp = (val, min, max) => {
    return Math.max(min, Math.min(max, val))
}


console.log(clamp(1, 0, 2))