import {random} from 'lodash'
import {AVATAR_COLORS} from '@constants/avatar'

export const getDynamicAvatarColor = (): string => {
    const colorsArr = Object.values(AVATAR_COLORS)

    return colorsArr[random(0, colorsArr.length - 1)]
}
