import * as React from 'react'
import {useDispatch} from 'react-redux'

import css from './index.module.scss'
import MessengerContainer from '@components/common/messenger/messenger-container'
import MessengerLeftAside from '@components/common/messenger/messanger-left-aside'
import MessengerMain from '@components/common/messenger/messanger-main'
import MessengerRightAside from '@components/common/messenger/messanger-right-aside'
import {ChatAction} from '@store/chat'
import {EStatusChat} from '@constants/chat'

const Messenger = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(ChatAction.getUsedList(EStatusChat.used))
    }, [])

    return (
        <div className={css.root}>
            <MessengerContainer>
                <MessengerLeftAside />
                <MessengerMain />
                <MessengerRightAside />
            </MessengerContainer>
        </div>
    )
}

export default Messenger
