import * as React from 'react'

import css from './index.module.scss'
import {EMessageReadingStatus} from '@constants/chat'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {
    type: 'light' | 'secondary'
    status: EMessageReadingStatus
}

const ReadingStatus = ({ status, type, parentClass }: IProps) => {
    const classNames = classnames(
        css.root,
        css[type],
        css[status],
        parentClass
    )

    return (
        <div className={classNames} />
    )
}

export default ReadingStatus
