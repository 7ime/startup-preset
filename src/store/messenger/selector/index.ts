import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.messenger

export const getModalData = createSelector(getState, state => state.modalData)
export const getAttemptDeleteChannelPayload = createSelector(getModalData, (modalData) => {
    return modalData.attemptDeleteChannelPayload
})
