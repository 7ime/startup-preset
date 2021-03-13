import * as React from 'react'

import css from './index.module.scss'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    date: string
}

const MessageDate = ({ date }: IProps) => {

    return (
        <div className={css.root}>

        </div>
    )
}

export default MessageDate
