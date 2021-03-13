import * as React from 'react'

import css from './index.module.scss'
import {IChat} from '@entities/chat'

interface IProps {
    data: IChat.ListItemModel
}

const ChatListItem = ({ data }: IProps) => {

    return (
        <div className={css.root}>
            {data.name}
        </div>
    )
}

export default ChatListItem
