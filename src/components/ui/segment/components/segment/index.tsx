import * as React from 'react'
import classnames from 'classnames'
import ISegment from '../../model'
import css from '../../styles/segment.module.scss'

const Segment = (props: ISegment.Props) => {
    const {
        children,
        parentClass
    } = props

    const classNames = classnames(
        css.segment,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default React.memo(Segment)
