import * as React from 'react'

import css from './index.module.scss'
import {EMessageReadingStatus} from '@constants/chat'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    status: EMessageReadingStatus
}

const ReadingStatus = ({ status }: IProps) => {

    return (
        <div className={css.root}>

        </div>
    )
}

export default ReadingStatus
