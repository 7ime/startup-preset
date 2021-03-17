import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import Modal from '@components/ui/modal/components/modal'

interface IProps extends IParentClass {
    onClose(): unknown
}

const MessengerModal: React.FC<IProps> = ({ parentClass, onClose, children }) => {
    const classNames = classnames(
        css.root,
        parentClass
    )

    return (
        <Modal onClose={onClose}>
            <div className={classNames}>
                {children}
            </div>
        </Modal>
    )
}

export default MessengerModal
