import {EChatNotificationsState, EMessageReadingStatus, EStatusChat, ETypeChat, ETypeSender} from '@constants/chat'
import {IAvatar} from '@models/avatar'

export namespace IChat {
    export interface ListItemModel {
        id: string
        name: string
        type: ETypeChat
        status: EStatusChat
        avatar: IAvatar | null
        counter: number | null
        notificationsState: EChatNotificationsState
        lastMessage: {
            date: string
            sender: ETypeSender
            shortPreviewMsg: string
            readingStatus: EMessageReadingStatus | null
        }
    }
}
