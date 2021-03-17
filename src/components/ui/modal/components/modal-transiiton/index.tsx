import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import {TRANSITION_CLASSNAME} from '@constants/transition-classname'
import IModal from '@components/ui/modal/model'

const ModalTransition: React.FC<IModal.TransitionProps> = (props) => {
    const {
        children,
        timeout = 300,
        ...restProps
    } = props

    return (
        <CSSTransition timeout={timeout} classNames={TRANSITION_CLASSNAME.modal} unmountOnExit {...restProps}>
            {children}
        </CSSTransition>
    )
}

export default ModalTransition
