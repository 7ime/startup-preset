import * as React from 'react'

const setRef = <T>(
    ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
    value: T | null,
): void => {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        ref.current = value
    }
}

export const useForkRef = <T>(refA: React.Ref<T>, refB: React.Ref<T>): React.Ref<T> => {
    return React.useMemo(() => {
        if (refA == null && refB == null) {
            return null
        }

        return (refValue) => {
            setRef(refA, refValue)
            setRef(refB, refValue)
        }
    }, [refA, refB])
}
