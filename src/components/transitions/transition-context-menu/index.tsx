import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import './index.module.scss'

interface IProps {
    in: boolean
    timeout?: number
}

const TransitionContextMenu: React.FC<IProps> = (props) => {
    const {
        children,
        in: inProp,
        timeout = 150
    } = props

    return (
        <CSSTransition in={inProp} timeout={timeout} classNames={'transition-context-menu'} unmountOnExit>
            {children}
        </CSSTransition>
    )
}

export default TransitionContextMenu
