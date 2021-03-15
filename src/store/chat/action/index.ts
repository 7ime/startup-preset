import {createAction} from '@reduxjs/toolkit'
import {IChat} from '@entities/chat'
import {EStatusChat} from '@constants/messenger'

export enum EActions {
    GetUsedList = '[Chat] GetUsedList',
    GetUsedListSuccess = '[Chat] GetUsedListSuccess',
}

export const getUsedList = createAction<EStatusChat>(EActions.GetUsedList)
export const getUsedListSuccess = createAction<IChat.ListItemModel[]>(EActions.GetUsedListSuccess)
