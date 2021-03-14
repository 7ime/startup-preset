import * as React from 'react'
import {IParentClass} from '@models/shared'

interface IProps extends IParentClass {
    onOutsideClick(event: MouseEvent): unknown
}

const OutsideClick: React.FC<IProps> = (props) => {
    const {
        children,
        onOutsideClick,
        parentClass
    } = props

    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick(event)
            }
        }

        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    return (
        <div ref={ref} className={parentClass}>{children}</div>
    )
}

export default OutsideClick
