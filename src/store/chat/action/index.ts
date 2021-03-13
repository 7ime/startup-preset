import {createAction} from '@reduxjs/toolkit'
import {IChat} from '@entities/chat'
import {EStatusChat} from '@constants/chat'

export enum EActions {
    GetList = '[Chat] GetList',
    GetListSuccess = '[Chat] GetListSuccess',
}

export const getList = createAction<EStatusChat>(EActions.GetList)
export const getListSuccess = createAction<IChat.ListItemModel[]>(EActions.GetListSuccess)
