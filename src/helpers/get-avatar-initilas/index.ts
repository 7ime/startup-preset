import {IAvatarInitials} from '@models/avatar'
import {Maybe} from '@toolbox/custom-types'

export const getAvatarInitials = (str: string): IAvatarInitials => {
    let firstInitial = 'A'
    let secondInitial: Maybe<string> = null

    const [firstChunk, secondChunk] = str.split(' ')

    if (firstChunk) {
        firstInitial = firstChunk.charAt(0).toLocaleUpperCase()
    }

    const result: IAvatarInitials = [firstInitial]

    if (secondChunk) {
        secondInitial = secondChunk.charAt(0).toLocaleUpperCase()

        result.push(secondInitial)
    }

    return result
}
