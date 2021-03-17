import * as React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import css from '../../styles/context-menu.module.scss'
import {ICursorPosition} from '@models/metrics'
import {invariant} from '@helpers/invariant'
import IContextMenu from '@components/ui/context-menu/model'
import {CSSTransition} from 'react-transition-group'
import {TRANSITION_CLASSNAME} from '@constants/transition-classname'

const modalNode = document.querySelector<HTMLDivElement>('#context-menu-root')

interface IDirection {
    x: 'left' | 'right'
    y: 'top' | 'bottom'
}

const ContextMenu: React.FC<IContextMenu.Props> = (props) => {
    invariant(!!modalNode, 'The "context-menu-root" element was not found. Please ensure your application has an element with the id "context-menu-root"')

    const {
        in: inProp,
        children,
        onClose,
        onExited,
        cursorPosition: internalCursorPosition,
        parentClass,
    } = props

    const ref = React.useRef<HTMLDivElement>(null)
    const [cursorPosition, setCursorPosition] = React.useState<ICursorPosition>(internalCursorPosition)
    const [direction, setDirection] = React.useState<IDirection>({
        x: 'left',
        y: 'top'
    })

    const classNames = classnames(
        css.contextMenu,
        css[`${direction.x}-${direction.y}`],
        parentClass
    )

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

            let newDirectionX = direction.x
            let newDirectionY = direction.y

            if (screenWidth < x + menuWidth) {
                newX = x - menuWidth
                newDirectionX = 'right'
            }

            if (screenHeight < y + menuHeight) {
                newY = y - menuHeight
                newDirectionY = 'bottom'
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

            setDirection({
                x: newDirectionX,
                y: newDirectionY
            })
        }

        checkBoundary()
    }, [])

    const handleOverlayClick = () => {
        onClose()
    }

    const handleOverlayContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()

        onClose()

        return false
    }

    return (
        ReactDOM.createPortal((
            <CSSTransition in={inProp} timeout={150} classNames={TRANSITION_CLASSNAME.contextMenu} unmountOnExit appear onExited={onExited}>
                <div className={css.contextMenuWrapper}>
                    <div className={css.overlay} onClick={handleOverlayClick} onContextMenu={handleOverlayContextMenu} />

                    <div ref={ref} className={classNames} style={{
                        top: cursorPosition.y + 'px',
                        left: cursorPosition.x + 'px',
                    }}>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        ), modalNode as HTMLDivElement)
    )
}

export default ContextMenu
