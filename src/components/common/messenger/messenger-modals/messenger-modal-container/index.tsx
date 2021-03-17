import * as React from 'react'

import {useSelector} from 'react-redux'
import {MessengerSelector} from '@store/messenger'
import {EMessengerModalType} from '@constants/messenger'
import MessengerModalDeleteChannel from '@components/common/messenger/messenger-modals/messenger-modal-delete-channel'

const getModal = (type: EMessengerModalType) => {
    switch (type) {
        case EMessengerModalType.deleteChannel: return <MessengerModalDeleteChannel />
    }
}

const MessengerModalContainer = () => {
    const {
        open,
        type
    } = useSelector(MessengerSelector.getModalData)

    if (!open || !type) return null

    return (
        <React.Fragment>
            {getModal(type)}
        </React.Fragment>
    )
}

export default MessengerModalContainer
