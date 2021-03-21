import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {

}

const AuthFormSubmit: React.FC<IProps> = ({ children, parentClass }) => {
    const classNames = classnames(
        css.authFormSubmit,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default AuthFormSubmit
