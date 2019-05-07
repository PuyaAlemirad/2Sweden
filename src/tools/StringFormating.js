
export function minutesToHM(min) {
    let m = min%60
    let h = (min-m) / 60

    return `${h}h${m}min`
}