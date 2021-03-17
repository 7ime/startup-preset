import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {

}

const ChatContextMenuList: React.FC<IProps> = (props) => {
    const {
        children,
        parentClass
    } = props

    const classNames = classnames(
        css.chatContextMenu,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default ChatContextMenuList
