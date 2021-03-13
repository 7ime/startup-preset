import {IFetcher} from '@api/fetcher/model'
import {IChatService} from './model'
import {injectPropertyFetcher} from '@toolbox/injects/injects-fetcher'
import {IChat} from '@entities/chat'
import {EStatusChat} from '@constants/chat'
import MockChat from '../../__mocks__/chat'

export default class ChatService implements IChatService {

    @injectPropertyFetcher
    private fetcher!: IFetcher

    getList(status: EStatusChat): Promise<IChat.ListItemModel[]> {
        const response: IChat.ListItemModel[] = MockChat.list(status)

        return new Promise((resolve) => {
            setTimeout(() => resolve(response), 100)
        })
    }
}
