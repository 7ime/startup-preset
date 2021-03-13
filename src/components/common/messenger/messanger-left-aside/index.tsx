import * as React from 'react'
import css from './index.module.scss'
import ChatList from '@components/common/messenger/chat-list'
import {useSelector} from 'react-redux'
import {ChatSelector} from '@store/chat'

const MessengerLeftAside = () => {
    const usedList = useSelector(ChatSelector.getUsedList)

    return (
        <div className={css.root}>
            {
                usedList && <ChatList list={usedList}/>
            }
        </div>
    )
}

export default MessengerLeftAside
