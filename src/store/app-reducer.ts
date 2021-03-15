import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from '@store/jsonplaceholder'
import {UiReducer} from '@store/ui'
import {WebNotificationReducer} from '@store/web-notification'
import {SwReducer} from '@store/sw'
import {ChatReducer} from '@store/chat'
import {MessengerReducer} from '@store/messenger'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer,
    ui: UiReducer.reducer,
    webNotification: WebNotificationReducer.reducer,
    sw: SwReducer.reducer,
    chat: ChatReducer.reducer,
    messenger: MessengerReducer.reducer
})

export type IAppState = ReturnType<typeof appReducer>
