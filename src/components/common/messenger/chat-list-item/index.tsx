import * as React from 'react'
import css from './index.module.scss'
import {IChat} from '@entities/chat'
import ChatAvatar from '@components/common/messenger/chat-avatar'
import {EChatNotificationsState, ETypeChat} from '@constants/chat'
import ChatStaticAvatar from '@components/common/messenger/chat-static-avatar'
import classnames from 'classnames'
import ReadingStatus from '@components/common/messenger/reading-status'
import MessageDate from '@components/common/messenger/message-date'
import ChatCounter from '@components/common/messenger/chat-counter'
import {getCounterForView} from '@helpers/get-counter-for-view'
import {checkShowSenderInChatList} from '@helpers/check-show-sender-in-chat-list'
import {getDateViewForChatList} from '@helpers/date/get-date-view-for-chat-list'

interface IProps {
    data: IChat.ListItemModel
}

const ChatListItem = ({ data }: IProps) => {
    const {
        avatar,
        type,
        name,
        lastMessage,
        selected,
        counter,
        notificationsState
    } = data

    const classNames = classnames(
        css.root,
        {[css.channel]: type === ETypeChat.channel},
        {[css.group]: type === ETypeChat.group},
        {[css.is_active]: selected},
    )

    return (
        <div className={classNames}>
            <div className={css.inner}>
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
                        {
                            checkShowSenderInChatList(type, lastMessage.senderType) && <div className={css.sender}>{lastMessage.senderName}: </div>
                        }
                        <div className={css.message}>{lastMessage.shortPreviewMsg}</div>
                    </div>
                </div>

                <div className={css.additionalInfo}>
                    {
                        lastMessage.readingStatus && <ReadingStatus status={lastMessage.readingStatus} parentClass={css.readingStatus} />
                    }
                    {
                        <MessageDate type={'light'} parentClass={css.date}>
                            {getDateViewForChatList(lastMessage.date)}
                        </MessageDate>
                    }
                    {
                        counter && (
                            <ChatCounter
                                type={notificationsState === EChatNotificationsState.disabled ? 'disabled' : 'primary'}
                                parentClass={classnames(css.counter, css[notificationsState])}
                            >
                                {getCounterForView(counter)}
                            </ChatCounter>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ChatListItem
