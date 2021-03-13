import {merge} from '@toolbox/tests/helpers/merge'
import {IAvatar} from '@models/avatar'

export default class MockAvatar {
    static empty = (partial?: Partial<IAvatar>) => merge<IAvatar>({
        initials: null,
        img: null,
        color: null
    }, partial)
}
