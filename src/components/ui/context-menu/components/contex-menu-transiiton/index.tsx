import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import IContextMenu from '@components/ui/context-menu/model'
import {TRANSITION_CLASSNAME} from '@constants/transition-classname'

const ContextMenuTransition: React.FC<IContextMenu.TransitionProps> = (props) => {
    const {
        children,
        in: inProp,
        timeout = 150
    } = props

    return (
        <CSSTransition in={inProp} timeout={timeout} classNames={TRANSITION_CLASSNAME.contextMenu} unmountOnExit>
            {children}
        </CSSTransition>
    )
}

export default ContextMenuTransition
