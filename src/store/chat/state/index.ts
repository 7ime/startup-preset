import {Maybe} from '@toolbox/custom-types'
import {IChat} from '@entities/chat'

export interface IState {
    usedList: Maybe<IChat.ListItemModel[]>
}

export const initialState: IState = {
    usedList: null,
}
