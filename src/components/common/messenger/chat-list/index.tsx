import * as React from 'react'
import css from './index.module.scss'
import ChatListItem from '@components/common/messenger/chat-list-item'
import {IChat} from '@entities/chat'

interface IProps {
    list: IChat.ListItemModel[]
}

const ChatList = (props: IProps) => {
    const {
        list
    } = props

    return (
        <div className={css.root}>
            {
                list.map((item) => (
                    <ChatListItem data={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default ChatList
