import {ICursorPosition} from '@models/metrics'
import {IParentClass} from '@models/shared'

namespace IContextMenu {
    export interface Props extends IParentClass {
        in: boolean
        onClose(): unknown
        onExited?(node: HTMLElement): unknown
        cursorPosition: ICursorPosition
    }
}

export default IContextMenu
