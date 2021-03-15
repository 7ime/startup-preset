import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import {useSelector} from 'react-redux'
import {MessengerSelector} from '@store/messenger'
import {EMessengerModalType} from '@constants/messenger'
import MessengerModalDeleteChannel from '@components/common/messenger/messenger-modals/messenger-modal-delete-channel'

interface IProps extends IParentClass {

}

const getModal = (modalType: EMessengerModalType) => {
    switch (modalType) {
        case EMessengerModalType.deleteChannel: return <MessengerModalDeleteChannel />
    }
}

const MessengerModalContainer = ({ parentClass }: IProps) => {
    const {
        open,
        type
    } = useSelector(MessengerSelector.getModalData)

    const classNames = classnames(
        css.root,
        parentClass
    )

    if (!open || !type) {
        return null
    }

    return (
        <div className={classNames}>
            {getModal(type)}
        </div>
    )
}

export default MessengerModalContainer
