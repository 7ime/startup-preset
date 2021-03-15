import {createAction} from '@reduxjs/toolkit'
import {IAttemptDeleteChannelPayload} from '@models/messenger'

export enum EActions {
    AttemptDeleteChannel = '[Messenger] AttemptDeleteChannel',
    closeModal = '[Messenger] closeModal',
}

export const attemptDeleteChannel = createAction<IAttemptDeleteChannelPayload>(EActions.AttemptDeleteChannel)
export const closeModal = createAction(EActions.closeModal)
