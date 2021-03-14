import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    onClick(event: React.MouseEvent<HTMLDivElement>): unknown
}

const ChatContextMenuItem: React.FC<IProps> = (props) => {
    const {
        children,
        onClick,
        parentClass,
    } = props

    const classNames = classnames(
        css.root,
        parentClass
    )

    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    )
}

export default ChatContextMenuItem
