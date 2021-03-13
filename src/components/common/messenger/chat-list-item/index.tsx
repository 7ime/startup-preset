import * as React from 'react'
import css from './index.module.scss'
import {IChat} from '@entities/chat'
import ChatAvatar from '@components/common/messenger/chat-avatar'
import {ETypeChat} from '@constants/chat'
import ChatStaticAvatar from '@components/common/messenger/chat-static-avatar'
import classnames from 'classnames'
import ReadingStatus from '@components/common/messenger/reading-status'
import MessageDate from '@components/common/messenger/message-date'

interface IProps {
    data: IChat.ListItemModel
}

const ChatListItem = ({ data }: IProps) => {
    const {
        avatar,
        type,
        name,
        lastMessage,
        selected
    } = data

    const classNames = classnames(
        css.root,
        {[css.channel]: type === ETypeChat.channel},
        {[css.group]: type === ETypeChat.group},
        {[css.is_active]: selected},
    )

    return (
        <div className={classNames}>
            <div className={css.avatarWrap}>
                {
                    avatar && <ChatAvatar data={avatar} parentClass={css.avatar} />
                }
                {
                    !avatar && type === ETypeChat.savedMessages && <ChatStaticAvatar type={'saved'} parentClass={css.avatar} />
                }
            </div>

            <div className={css.content}>
                <div className={css.header}>{name}</div>
                <div className={css.footer}>
                    <div className={css.sender}>{lastMessage.sender}: </div>
                    <div className={css.message}>{lastMessage.shortPreviewMsg}</div>
                </div>
            </div>

            <div className={css.additionalInfo}>
                {
                    lastMessage.readingStatus && <ReadingStatus status={lastMessage.readingStatus} parentClass={css.readingStatus} />
                }
                {
                    <MessageDate date={lastMessage.date} parentClass={css.date} />
                }
            </div>
        </div>
    )
}

export default ChatListItem
