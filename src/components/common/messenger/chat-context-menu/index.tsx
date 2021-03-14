import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import OutsideClick from '@components/utilities/outside-click'
import {ICursorPosition} from '@models/metrics'

interface IProps extends IParentClass {
    onOutsideClick(event: MouseEvent): unknown
    cursorPosition: ICursorPosition
}

const ChatContextMenu: React.FC<IProps> = (props) => {
    const {
        children,
        onOutsideClick,
        parentClass,
    } = props

    const classNames = classnames(
        css.root,
        parentClass
    )

    const handleOutsideClick = (event: MouseEvent) => {
        onOutsideClick(event)
    }

    return (
        <OutsideClick onOutsideClick={handleOutsideClick}>
            <div className={classNames}>
                {children}
            </div>
        </OutsideClick>
    )
}

export default ChatContextMenu
