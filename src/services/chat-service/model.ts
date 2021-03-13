import {IChat} from '@entities/chat'
import {EStatusChat} from '@constants/chat'

export interface IChatService {
    getList(status: EStatusChat): Promise<IChat.ListItemModel[]>
}
