import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {MessengerAction, MessengerSelector} from '@store/messenger'
import MessengerModal from '@components/common/messenger/messenger-modals/messenger-modal'

interface IProps extends IParentClass {

}

const MessengerModalDeleteChannel = ({ parentClass }: IProps) => {
    const dispatch = useDispatch()
    const payload = useSelector(MessengerSelector.getAttemptDeleteChannelPayload)

    const classNames = classnames(
        css.root,
        parentClass
    )

    const handleClose = () => {
        dispatch(MessengerAction.closeModal())
    }

    if (!payload) return null

    return (
        <MessengerModal onClose={handleClose}>
            <div className={classNames}>
                123
            </div>
        </MessengerModal>
    )
}

export default MessengerModalDeleteChannel
