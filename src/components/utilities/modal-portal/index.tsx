import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import {invariant} from '@helpers/invariant'

interface IProps extends IParentClass {
    onClose(): unknown
}

const bodyNode = document.querySelector<HTMLBodyElement>('body')
const modalNode = document.querySelector<HTMLDivElement>('#modal-root')

const switchScroll = (flag: boolean) => {
    if (!bodyNode) return

    bodyNode.style.overflowY = flag ? 'auto' : 'hidden'
}

const ModalPortal: React.FC<IProps> = (props) => {
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

    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        switchScroll(false)
        setShow(true)

        return () => switchScroll(true)
    }, [])

    const handleClick = () => {
        onClose()
    }

    return (createPortal(
        show ? (
            <div className={classNames}>
                <div className={css.overlay} onClick={handleClick}/>
                <div className={css.content}>
                    {children}
                </div>
            </div>
        ) : null,
        modalNode as HTMLDivElement,
    ))
}

export default ModalPortal
