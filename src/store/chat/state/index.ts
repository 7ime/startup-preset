import {Maybe} from '@toolbox/custom-types'
import {IChat} from '@entities/chat'

export interface IState {
    list: Maybe<IChat.ListItem[]>
}

export const initialState: IState = {
    list: null,
}
