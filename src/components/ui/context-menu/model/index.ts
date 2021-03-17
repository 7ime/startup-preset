import * as React from 'react'
import {ICursorPosition} from '@models/metrics'
import {IParentClass, ITransitionProps} from '@models/shared'

namespace IContextMenu {
    export interface Props extends IParentClass {
        onOutsideClick(event: React.MouseEvent): unknown
        cursorPosition: ICursorPosition
    }

    export interface TransitionProps extends ITransitionProps {

    }
}

export default IContextMenu
