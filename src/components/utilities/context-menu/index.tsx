import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import OutsideClick from '@components/utilities/outside-click'
import {ICursorPosition} from '@models/metrics'

interface IProps extends IParentClass {
    onOutsideClick(event: MouseEvent): unknown
    cursorPosition: ICursorPosition
}

const ContextMenu: React.FC<IProps> = (props) => {
    const {
        children,
        onOutsideClick,
        cursorPosition: internalCursorPosition,
        parentClass,
    } = props

    const classNames = classnames(
        css.root,
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

    return (
        <div className={css.wrapper}>
            <OutsideClick onOutsideClick={onOutsideClick}>
                <div ref={ref} className={classNames} style={{
                    top: cursorPosition.y + 'px',
                    left: cursorPosition.x + 'px',
                }}>
                    {children}
                </div>
            </OutsideClick>
        </div>
    )
}

export default ContextMenu
