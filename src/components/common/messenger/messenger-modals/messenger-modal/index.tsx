import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import ModalPortal from '@components/utilities/modal-portal'

interface IProps extends IParentClass {
    onClose(): unknown
}

const MessengerModal: React.FC<IProps> = ({ parentClass, onClose, children }) => {
    const classNames = classnames(
        css.root,
        parentClass
    )

    return (
        <ModalPortal onClose={onClose}>
            <div className={classNames}>
                {children}
            </div>
        </ModalPortal>
    )
}

export default MessengerModal
