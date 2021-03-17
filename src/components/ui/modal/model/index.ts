import {IParentClass, ITransitionProps} from '@models/shared'

namespace IModal {
    export interface Props extends IParentClass {
        onClose(): unknown
    }

    export interface TransitionProps extends ITransitionProps {

    }
}

export default IModal
