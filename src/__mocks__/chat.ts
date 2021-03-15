import {v4 as uuid} from 'uuid'
import moment from 'moment'
import {IChat} from '@entities/chat'
import {EChatNotificationsState, EMessageReadingStatus, EStatusChat, ETypeChat, ETypeSender} from '@constants/messenger'
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
            selected: false,
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: moment().toISOString(),
                senderType: ETypeSender.self,
                senderName: 'You',
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
                img: 'https://avatars.yandex.net/get-music-content/2806365/8703ec7c.a.11646710-1/m1000x1000?webp=false',
            }),
            selected: false,
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: moment().subtract(1, 'days').toISOString(),
                senderType: ETypeSender.user,
                senderName: 'Maria Ivanova',
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
            selected: true,
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: moment().subtract(2, 'days').toISOString(),
                senderType: ETypeSender.user,
                senderName: 'Learn Javascript',
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
            selected: false,
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: moment().subtract(3, 'days').toISOString(),
                senderType: ETypeSender.self,
                senderName: 'You',
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
            selected: false,
            status,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: moment().subtract(4, 'days').toISOString(),
                senderType: ETypeSender.self,
                senderName: 'You',
                shortPreviewMsg: 'Hello man',
                readingStatus: EMessageReadingStatus.unread
            }
        },
        {
            id: uuid(),
            name: 'Elena Markova',
            type: ETypeChat.single,
            counter: 10000000,
            avatar: MockAvatar.empty({
                color: getDynamicAvatarColor(),
                initials: getAvatarInitials('Elena Markova')
            }),
            selected: true,
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: moment().subtract(5, 'days').toISOString(),
                senderType: ETypeSender.user,
                senderName: 'Elena Markova',
                shortPreviewMsg: 'Hello man',
                readingStatus: EMessageReadingStatus.unread
            }
        },
        {
            id: uuid(),
            name: 'Messenger News',
            type: ETypeChat.channel,
            counter: 1,
            avatar: MockAvatar.empty({
                img: 'https://images.wallpaperscraft.ru/image/gory_vershina_sneg_113610_7952x5304.jpg'
            }),
            status,
            selected: false,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: moment().subtract(6, 'days').toISOString(),
                senderType: ETypeSender.channel,
                senderName: 'Messenger News',
                shortPreviewMsg: 'We have done some improvements',
                readingStatus: null
            }
        },
        {
            id: uuid(),
            name: '1111111111111111111111111111111111111111111111111111111111111111111111111112222222222222111111111111',
            type: ETypeChat.channel,
            counter: 99999999999,
            avatar: MockAvatar.empty({
                img: 'https://images.wallpaperscraft.ru/image/gory_vershina_sneg_113610_7952x5304.jpg'
            }),
            status,
            selected: false,
            notificationsState: EChatNotificationsState.disabled,
            lastMessage: {
                date: moment().subtract(7, 'days').toISOString(),
                senderType: ETypeSender.channel,
                senderName: 'Messenger News',
                shortPreviewMsg: '111111111111111111111111111111111111111111111111111122222222222222222222211111111111111111111111111111111111',
                readingStatus: null
            }
        },
        {
            id: uuid(),
            name: 'Pavel',
            type: ETypeChat.single,
            counter: null,
            avatar: MockAvatar.empty({
                color: getDynamicAvatarColor(),
                initials: getAvatarInitials('Pavel')
            }),
            selected: false,
            status,
            notificationsState: EChatNotificationsState.enabled,
            lastMessage: {
                date: moment().subtract(8, 'days').toISOString(),
                senderType: ETypeSender.self,
                senderName: 'You',
                shortPreviewMsg: 'Hello man. 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                readingStatus: EMessageReadingStatus.read
            }
        },
    ]
}
