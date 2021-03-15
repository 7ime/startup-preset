import {createReducer} from '@reduxjs/toolkit'
import {MessengerAction, MessengerState} from '@store/messenger'
import {EMessengerModalType} from '@constants/messenger'

export const reducer = createReducer(MessengerState.initialState, (builder) => {
    builder
        .addCase(MessengerAction.attemptDeleteChannel, (state, {payload}) => {
            state.modal.open = true
            state.modal.type = EMessengerModalType.deleteChannel
            state.modal.attemptDeleteChannelPayload = payload
        })
        .addCase(MessengerAction.closeModal, (state) => {
            state.modal = {
                open: false,
                type: null
            }
        })
})
