import {IParentClass} from '@models/shared'

namespace IModal {
    export interface Props extends IParentClass {
        in: boolean
        onClose(): unknown
        onExited?(node: HTMLElement): unknown
    }
}

export default IModal
