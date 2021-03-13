import * as React from 'react'

import css from './index.module.scss'
import {IAvatar} from '@models/avatar'
import {ETypeChat} from '@constants/chat'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    type: 'saved' | 'archived'
}

const ChatStaticAvatar = ({ type }: IProps) => {

    return (
        <div className={css.root}>

        </div>
    )
}

export default ChatStaticAvatar
