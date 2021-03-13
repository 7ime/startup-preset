import {combineReducers} from '@reduxjs/toolkit'
import {JsonPlaceholderReducer} from '@store/jsonplaceholder'
import {UiReducer} from '@store/ui'
import {WebNotificationReducer} from '@store/web-notification'
import {SwReducer} from '@store/sw'
import {ChatReducer} from '@store/chat'

export const appReducer = combineReducers({
    jsonPlaceholder: JsonPlaceholderReducer.reducer,
    ui: UiReducer.reducer,
    webNotification: WebNotificationReducer.reducer,
    sw: SwReducer.reducer,
    chat: ChatReducer.reducer,
})

export type IAppState = ReturnType<typeof appReducer>
