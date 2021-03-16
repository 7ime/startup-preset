import * as React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import {ICursorPosition} from '@models/metrics'
import {invariant} from '@helpers/invariant'

interface IProps extends IParentClass {
    onOutsideClick(event: React.MouseEvent): unknown
    cursorPosition: ICursorPosition
}

const modalNode = document.querySelector<HTMLDivElement>('#context-menu-root')

const ContextMenu: React.FC<IProps> = (props) => {
    invariant(!!modalNode, 'The "context-menu-root" element was not found. Please ensure your application has an element with the id "modal-root"')

    const {
        children,
        onOutsideClick,
        cursorPosition: internalCursorPosition,
        parentClass,
    } = props

    const classNames = classnames(
        css.contextMenu,
        parentClass
    )

    const ref = React.useRef<HTMLDivElement>(null)
    const [cursorPosition, setCursorPosition] = React.useState<ICursorPosition>(internalCursorPosition)

    React.useEffect(() => {
        const checkBoundary = () => {
            if (!ref.current) return

            const {
                x,
                y
            } = cursorPosition

            const screenWidth = window.innerWidth
            const screenHeight = window.innerHeight

            const menuWidth = ref.current.offsetWidth
            const menuHeight = ref.current.offsetHeight

            let newX = cursorPosition.x
            let newY = cursorPosition.y

            if (screenWidth < x + menuWidth) {
                newX = x - menuWidth
            }

            if (screenHeight < y + menuHeight) {
                newY = y - menuHeight
            }

            if (newX < 0) {
                newX = 0
            }

            if (newY < 0) {
                newY = 0
            }

            setCursorPosition({
                x: newX,
                y: newY,
            })
        }

        checkBoundary()
    }, [])

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        onOutsideClick(event)
    }

    const handleOverlayContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()

        onOutsideClick(event)

        return false
    }

    return (
        ReactDOM.createPortal((
            <div className={css.contextMenuWrapper} onClick={handleOverlayClick} onContextMenu={handleOverlayContextMenu}>
                <div className={css.overlay} />

                <div ref={ref} className={classNames} style={{
                    top: cursorPosition.y + 'px',
                    left: cursorPosition.x + 'px',
                }}>
                    {children}
                </div>
            </div>
        ), modalNode as HTMLDivElement)
    )
}

export default ContextMenu
