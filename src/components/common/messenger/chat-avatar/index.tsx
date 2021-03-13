import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IAvatar} from '@models/avatar'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    data: IAvatar
}

const ChatAvatar = ({ data, parentClass }: IProps) => {
    const {
        img,
        initials,
        color,
    } = data

    return (
        <div className={classnames(css.root, parentClass)} style={{
            backgroundImage: img ? `url(${img})` : 'none',
            backgroundColor: color ? color : 'none',
        }}>
            {
                initials && (
                    <div className={css.initials}>
                        <span>{initials[0]}</span>
                        {
                            initials[1] && <span>{initials[1]}</span>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ChatAvatar
