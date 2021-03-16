import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import ChatContextMenu from '@components/common/messenger/chat-context-menu'
import ChatContextMenuItem from '@components/common/messenger/chat-context-menu-item'
import {ICursorPosition} from '@models/metrics'
import {useDispatch} from 'react-redux'
import {IChat} from '@entities/chat'
import {MessengerAction} from '@store/messenger'

interface IProps extends IParentClass {
    data: IChat.ListItemModel
    cursorPosition: ICursorPosition
    onClose(): unknown
}

const ChatListContextMenu = (props: IProps) => {
    const dispatch = useDispatch()

    const {
        onClose,
        parentClass,
        cursorPosition,
        data
    } = props

    const classNames = classnames(
        css.chatListContextMenu,
        parentClass
    )

    const handleOutsideClick = () => {
        onClose()
    }

    const handleDelete = () => {
        dispatch(MessengerAction.attemptDeleteChannel({
            id: data.id,
            name: data.name
        }))

        onClose()
    }

    return (
        <ChatContextMenu onOutsideClick={handleOutsideClick} parentClass={classNames} cursorPosition={cursorPosition}>
            <ChatContextMenuItem onClick={() => undefined}>Archive chat</ChatContextMenuItem>
            <ChatContextMenuItem onClick={() => undefined}>Pin to top</ChatContextMenuItem>
            <ChatContextMenuItem onClick={() => undefined}>Disable Notifications</ChatContextMenuItem>
            <ChatContextMenuItem onClick={() => undefined}>Make as unread</ChatContextMenuItem>
            <ChatContextMenuItem onClick={handleDelete}>Delete and leave</ChatContextMenuItem>
            <ChatContextMenuItem onClick={() => undefined}>Clear history</ChatContextMenuItem>
        </ChatContextMenu>
    )
}

export default ChatListContextMenu
