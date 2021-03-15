import {EMessengerModalType} from '@constants/messenger'
import {IAttemptDeleteChannelPayload} from '@models/messenger'

export interface IState {
    modalData: {
        open: boolean
        type: EMessengerModalType | null
        attemptDeleteChannelPayload?: IAttemptDeleteChannelPayload
    }
}

export const initialState: IState = {
    modalData: {
        open: false,
        type: null
    }
}
