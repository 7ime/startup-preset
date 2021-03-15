import {IChat} from '@entities/chat'
import {EStatusChat} from '@constants/messenger'

export interface IChatService {
    getList(status: EStatusChat): Promise<IChat.ListItemModel[]>
}
