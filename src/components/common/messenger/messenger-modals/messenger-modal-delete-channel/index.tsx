import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {MessengerAction, MessengerSelector} from '@store/messenger'
import MessengerModal from '@components/common/messenger/messenger-modals/messenger-modal'
import Button from '@components/ui/buttons/components/button'

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
        <MessengerModal onClose={handleClose} parentClass={css.modal}>
            <div className={classNames}>
                <div className={css.text}>
                    Are you sure you want to delete all message history and leave «{payload.name}»
                </div>

                <div className={css.text}>
                    This action cannot be undone
                </div>

                <div className={css.actions}>
                    <Button onClick={() => undefined} type={'primary'} fill={'basic'} parentClass={css.button}>CANCEL</Button>
                    <Button onClick={() => undefined} type={'warning'} fill={'basic'} parentClass={css.button}>LEAVE</Button>
                </div>
            </div>
        </MessengerModal>
    )
}

export default MessengerModalDeleteChannel
