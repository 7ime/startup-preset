import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {
    type?: 'primary' | 'disabled' | 'default'
}

const ChatCounter: React.FC<IProps> = ({ parentClass, type = 'default', children }) => {
    const classNames = classnames(
        css.root,
        css[type],
        parentClass,
    )

    return (
        <div className={classNames}>{children}</div>
    )
}

export default ChatCounter
