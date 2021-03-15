import {EChatNotificationsState, EMessageReadingStatus, EStatusChat, ETypeChat, ETypeSender} from '@constants/messenger'
import {IAvatar} from '@models/avatar'

export namespace IChat {
    export interface ListItemModel {
        id: string
        name: string
        type: ETypeChat
        status: EStatusChat
        selected: boolean
        avatar: IAvatar | null
        counter: number | null
        notificationsState: EChatNotificationsState
        lastMessage: {
            date: string
            senderType: ETypeSender
            senderName: string
            shortPreviewMsg: string
            readingStatus: EMessageReadingStatus | null
        }
    }
}
