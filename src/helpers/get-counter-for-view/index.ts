export const getCounterForView = (value: number, maxSize = 99999): string => {
    if (value > maxSize) {
        return '+' + maxSize
    }

    return value.toString()
}
