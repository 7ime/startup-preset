import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import {ICursorPosition} from '@models/metrics'
import ContextMenu from '@components/utilities/context-menu'

interface IProps extends IParentClass {
    onOutsideClick(event: MouseEvent): unknown
    cursorPosition: ICursorPosition
}

const ChatContextMenu: React.FC<IProps> = (props) => {
    const {
        children,
        onOutsideClick,
        parentClass,
        cursorPosition
    } = props

    const classNames = classnames(
        css.root,
        parentClass
    )

    return (
        <ContextMenu onOutsideClick={onOutsideClick} cursorPosition={cursorPosition}>
            <div className={classNames}>
                {children}
            </div>
        </ContextMenu>
    )
}

export default ChatContextMenu
