import {createReducer} from '@reduxjs/toolkit'
import {MessengerAction, MessengerState} from '@store/messenger'
import {EMessengerModalType} from '@constants/messenger'

export const reducer = createReducer(MessengerState.initialState, (builder) => {
    builder
        .addCase(MessengerAction.attemptDeleteChannel, (state, {payload}) => {
            state.modalData.open = true
            state.modalData.type = EMessengerModalType.deleteChannel
            state.modalData.attemptDeleteChannelPayload = payload
        })
        .addCase(MessengerAction.closeModal, (state) => {
            state.modalData = {
                open: false,
                type: null
            }
        })
})
