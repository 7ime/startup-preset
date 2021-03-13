import {EChatNotificationsState, EMessageReadingStatus, EStatusChat, ETypeChat, ETypeSender} from '@constants/chat'

export namespace IChat {
    export interface ListItem {
        id: string;
        name: string
        type: ETypeChat
        status: EStatusChat
        avatar: string | null
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
