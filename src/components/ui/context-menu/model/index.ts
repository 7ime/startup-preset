import * as React from 'react'
import {ICursorPosition} from '@models/metrics'
import {IParentClass} from '@models/shared'
import {CSSTransitionProps} from 'react-transition-group/CSSTransition'

namespace IContextMenu {
    export interface Props extends IParentClass {
        onOutsideClick(event: React.MouseEvent): unknown
        cursorPosition: ICursorPosition
    }

    export type TransitionProps = {} & Partial<CSSTransitionProps>
}

export default IContextMenu
