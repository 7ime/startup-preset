import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import ChatContextMenuList from '@components/common/messenger/chat-context-menu-list'
import ChatContextMenuItem from '@components/common/messenger/chat-context-menu-item'
import {ICursorPosition} from '@models/metrics'
import {useDispatch} from 'react-redux'
import {IChat} from '@entities/chat'
import {MessengerAction} from '@store/messenger'
import ContextMenu from '@components/ui/context-menu/components/context-menu'

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

    const [show, setShow] = React.useState(true)

    const handleClose = () => {
        setShow(false)
    }

    const handleExited = () => {
        onClose()
    }

    const handleDelete = () => {
        dispatch(MessengerAction.attemptDeleteChannel({
            id: data.id,
            name: data.name
        }))

        setShow(false)
    }

    return (
        <ContextMenu in={show} onClose={handleClose} cursorPosition={cursorPosition} onExited={handleExited}>
            <ChatContextMenuList parentClass={classNames}>
                <ChatContextMenuItem onClick={() => undefined}>Archive chat</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Pin to top</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Disable Notifications</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Make as unread</ChatContextMenuItem>
                <ChatContextMenuItem onClick={handleDelete}>Delete and leave</ChatContextMenuItem>
                <ChatContextMenuItem onClick={() => undefined}>Clear history</ChatContextMenuItem>
            </ChatContextMenuList>
        </ContextMenu>
    )
}

export default ChatListContextMenu
