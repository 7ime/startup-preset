import {EMessengerModalType} from '@constants/messenger'
import {IAttemptDeleteChannelPayload} from '@models/messenger'

export interface IState {
    modal: {
        open: boolean
        type: EMessengerModalType | null
        attemptDeleteChannelPayload?: IAttemptDeleteChannelPayload
    }
}

export const initialState: IState = {
    modal: {
        open: false,
        type: null
    }
}
