import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import {TRANSITION_CLASSNAME} from '@constants/transition-classname'
import IModal from '@components/ui/modal/model'

const ModalTransition: React.FC<IModal.TransitionProps> = (props) => {
    const {
        children,
        in: inProp,
        timeout = 300
    } = props

    return (
        <CSSTransition in={inProp} timeout={timeout} classNames={TRANSITION_CLASSNAME.modal} unmountOnExit>
            {children}
        </CSSTransition>
    )
}

export default ModalTransition
