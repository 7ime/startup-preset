import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {

}

const AuthTitle: React.FC<IProps> = ({ children, parentClass }) => {
    const classNames = classnames(
        css.authTitle,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default AuthTitle
