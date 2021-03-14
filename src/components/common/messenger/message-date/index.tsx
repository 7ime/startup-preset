import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    type: 'light' | 'secondary'
}

const MessageDate: React.FC<IProps> = (props) => {
    const {
        children,
        type = 'default',
        parentClass
    } = props

    const classNames = classnames(
        css.root,
        css[type],
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default MessageDate
