import {IParentClass} from '@models/shared'
import {CSSTransitionProps} from 'react-transition-group/CSSTransition'

namespace IModal {
    export interface Props extends IParentClass {
        onClose(): unknown
    }

    export type TransitionProps = {} & Partial<CSSTransitionProps>

}

export default IModal
