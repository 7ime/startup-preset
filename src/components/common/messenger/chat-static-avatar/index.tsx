import * as React from 'react'

import css from './index.module.scss'
import classnames from 'classnames'
import {IParentClass} from '@models/shared'
import {chatIcons} from '../../../../assets/dynamic-svg/chat'

interface IProps extends IParentClass {
    type: 'saved' | 'archived'
}

const ChatStaticAvatar = ({ type }: IProps) => {

    return (
        <div className={classnames(css.root, css[type])}>
            <div className={css.icon}>
                {
                    type === 'saved' && chatIcons.bookmark()
                }
            </div>
        </div>
    )
}

export default ChatStaticAvatar
