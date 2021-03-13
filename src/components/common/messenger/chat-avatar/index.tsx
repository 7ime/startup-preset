import * as React from 'react'

import css from './index.module.scss'
import {IAvatar} from '@models/avatar'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    data: IAvatar
}

const ChatAvatar = ({ data }: IProps) => {

    return (
        <div className={css.root}>

        </div>
    )
}

export default ChatAvatar
