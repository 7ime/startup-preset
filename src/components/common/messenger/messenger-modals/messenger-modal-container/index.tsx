import * as React from 'react'

import {useSelector} from 'react-redux'
import {MessengerSelector} from '@store/messenger'
import {EMessengerModalType} from '@constants/messenger'
import MessengerModalDeleteChannel from '@components/common/messenger/messenger-modals/messenger-modal-delete-channel'
import ModalTransition from '@components/ui/modal/components/modal-transiiton'

const getModal = (modalType: EMessengerModalType) => {
    switch (modalType) {
        case EMessengerModalType.deleteChannel: return <MessengerModalDeleteChannel />
        default: return <div hidden />
    }
}

const MessengerModalContainer = () => {
    const {
        open,
        type
    } = useSelector(MessengerSelector.getModalData)

    return (
        <ModalTransition in={!!(open && type)}>
            {getModal(type as EMessengerModalType)}
        </ModalTransition>
    )
}

export default MessengerModalContainer
