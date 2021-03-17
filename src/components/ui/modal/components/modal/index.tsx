import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import css from '../../styles/modal.module.scss'
import {invariant} from '@helpers/invariant'
import IModal from '@components/ui/modal/model'

const bodyNode = document.querySelector<HTMLBodyElement>('body')
const modalNode = document.querySelector<HTMLDivElement>('#modal-root')

const switchScroll = (flag: boolean) => {
    if (!bodyNode) return

    bodyNode.style.overflowY = flag ? 'auto' : 'hidden'
}

const Modal: React.FC<IModal.Props> = (props) => {
    invariant(!!modalNode, 'The "modal-root" element was not found. Please ensure your application has an element with the id "modal-root"')

    const {
        children,
        onClose,
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
        <div className={classNames}>
            <div className={css.overlay} onClick={handleClick}/>
            <div className={css.content}>
                {children}
            </div>
        </div>,
        modalNode as HTMLDivElement,
    ))
}

export default Modal
