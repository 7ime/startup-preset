import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import Modal from '@components/ui/modal/components/modal'
import ModalTransition from '@components/ui/modal/components/modal-transiiton'

interface IProps extends IParentClass {
    onClose(): unknown
}

const MessengerModal: React.FC<IProps> = ({ parentClass, onClose, children }) => {
    const classNames = classnames(
        css.root,
        parentClass
    )

    const [show, setShow] = React.useState(true)

    const handleClose = () => {
        setShow(false)
    }

    const handleExited = () => {
        onClose()
    }

    return (
        <ModalTransition in={show} onExited={handleExited} appear>
            <Modal onClose={handleClose}>
                <div className={classNames}>
                    {children}
                </div>
            </Modal>
        </ModalTransition>
    )
}

export default MessengerModal
