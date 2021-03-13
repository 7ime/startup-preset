import {v4 as uuid} from 'uuid'
import {IChat} from '@entities/chat'
import {EChatNotificationsState, EMessageReadingStatus, EStatusChat, ETypeChat, ETypeSender} from '@constants/chat'
import MockAvatar from './avatar'
import {getDynamicAvatarColor} from '@helpers/get-dynamic-avatar-color'
import {getAvatarInitials} from '@helpers/get-avatar-initilas'

export default class MockChat {
    static list = (status = EStatusChat.used): IChat.ListItemModel[] => [
        {
            id: uuid(),
            name: 'Saved Messages',
            type: ETypeChat.savedMessages,
            counter: null,
            avatar: null,
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: '2021-02-09T18:31:42',
                sender: ETypeSender.self,
                shortPreviewMsg: 'Hello world',
                readingStatus: null
            }
        },
        {
            id: uuid(),
            name: 'Maria Ivanova',
            type: ETypeChat.single,
            counter: 2,
            avatar: MockAvatar.empty({
                img: 'https://get.wallhere.com/photo/women-blonde-glasses-women-with-glasses-smiling-ponytail-open-mouth-1228377.jpg',
            }),
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: '2021-03-09T18:31:42',
                sender: ETypeSender.user,
                shortPreviewMsg: 'How are you?',
                readingStatus: null
            }
        },
        {
            id: uuid(),
            name: 'Learn Javascript',
            type: ETypeChat.group,
            counter: 1000,
            avatar: MockAvatar.empty({
                img: 'https://im0-tub-by.yandex.net/i?id=74293382d62c074d20f9b603a19f8286&n=13&exp=1',
            }),
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: '2021-03-02T09:31:42',
                sender: ETypeSender.user,
                shortPreviewMsg: 'Frontend the best',
                readingStatus: null
            }
        },
        {
            id: uuid(),
            name: 'Pavel Noname',
            type: ETypeChat.single,
            counter: null,
            avatar: MockAvatar.empty({
                color: getDynamicAvatarColor(),
                initials: getAvatarInitials('Pavel Noname')
            }),
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: '2021-02-09T18:31:42',
                sender: ETypeSender.self,
                shortPreviewMsg: 'Hello man',
                readingStatus: EMessageReadingStatus.read
            }
        },
        {
            id: uuid(),
            name: 'Elena Markova',
            type: ETypeChat.single,
            counter: null,
            avatar: MockAvatar.empty({
                color: getDynamicAvatarColor(),
                initials: getAvatarInitials('Elena Markova')
            }),
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: '2021-02-09T18:31:42',
                sender: ETypeSender.self,
                shortPreviewMsg: 'Hello man',
                readingStatus: EMessageReadingStatus.unread
            }
        },
        {
            id: uuid(),
            name: 'Messenger News',
            type: ETypeChat.system,
            counter: 1,
            avatar: null,
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: '2021-02-09T18:31:42',
                sender: ETypeSender.system,
                shortPreviewMsg: 'We have done some improvements',
                readingStatus: null
            }
        },
    ]
}
