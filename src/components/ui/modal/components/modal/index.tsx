import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import css from '../../styles/modal.module.scss'
import {invariant} from '@helpers/invariant'
import IModal from '@components/ui/modal/model'
import {CSSTransition} from 'react-transition-group'
import {TRANSITION_CLASSNAME} from '@constants/transition-classname'

const bodyNode = document.querySelector<HTMLBodyElement>('body')
const modalNode = document.querySelector<HTMLDivElement>('#modal-root')

const switchScroll = (flag: boolean) => {
    if (!bodyNode) return

    bodyNode.style.overflowY = flag ? 'auto' : 'hidden'
}

const Modal: React.FC<IModal.Props> = (props) => {
    invariant(!!modalNode, 'The "modal-root" element was not found. Please ensure your application has an element with the id "modal-root"')

    const {
        in: inProp,
        children,
        onClose,
        onExited,
        parentClass,
    } = props

    const classNames = classnames(
        css.modal,
        parentClass
    )

    React.useEffect(() => {
        switchScroll(false)

        return () => switchScroll(true)
    }, [])

    const handleClick = () => {
        onClose()
    }

    return (createPortal(
        <CSSTransition in={inProp} timeout={300} classNames={TRANSITION_CLASSNAME.modal} unmountOnExit onExited={onExited} appear>
            <div className={classNames}>
                <div className={css.overlay} onClick={handleClick}/>
                <div className={css.content}>
                    {children}
                </div>
            </div>
        </CSSTransition>,
        modalNode as HTMLDivElement,
    ))
}

export default Modal
