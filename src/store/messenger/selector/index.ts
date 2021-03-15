import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.messenger

export const getModal = createSelector(getState, state => state.modal)
export const getAttemptDeleteChannelPayload = createSelector(getModal, (modal) => {
    return modal.attemptDeleteChannelPayload
})
