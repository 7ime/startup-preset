import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import ChatContextMenu from '@components/common/messenger/chat-context-menu'
import ChatContextMenuItem from '@components/common/messenger/chat-context-menu-item'
import {ICursorPosition} from '@models/metrics'

interface IProps extends IParentClass {
    chatId: string
    cursorPosition: ICursorPosition
    onClose(): unknown
}

const ChatListContextMenu = (props: IProps) => {
    const {
        onClose,
        parentClass,
        cursorPosition
    } = props

    const classNames = classnames(
        css.root,
        parentClass
    )

    const handleOutsideClick = () => {
        onClose()
    }

    return (
        <div className={classNames}>
            <ChatContextMenu onOutsideClick={handleOutsideClick} parentClass={css.contextMenu} cursorPosition={cursorPosition}>
                <ChatContextMenuItem onClick={() => undefined}>Archive chat</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Pin to top</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Disable Notifications</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Make as unread</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Delete and leave</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Clear history</ChatContextMenuItem>
            </ChatContextMenu>
        </div>
    )
}

export default ChatListContextMenu
