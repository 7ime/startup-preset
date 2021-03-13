import {ChatAction, ChatState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(ChatState.initialState, (builder) => {
    builder
        .addCase(ChatAction.getUsedListSuccess, (state, {payload}) => {
            state.usedList = payload
        })
})
