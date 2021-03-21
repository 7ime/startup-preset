import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {

}

const Copyright = ({ parentClass }: IProps) => {
    const classNames = classnames(
        css.copyright,
        parentClass
    )

    return (
        <div className={classNames}>
            Startup preset. Free access
        </div>
    )
}

export default Copyright
