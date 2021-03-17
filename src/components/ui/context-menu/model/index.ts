import * as React from 'react'
import {ICursorPosition} from '@models/metrics'
import {IParentClass} from '@models/shared'

namespace IContextMenu {
    export interface Props extends IParentClass {
        onOutsideClick(event: React.MouseEvent): unknown
        cursorPosition: ICursorPosition
    }

    export interface TransitionProps {
        in: boolean
        timeout?: number
    }
}

export default IContextMenu
