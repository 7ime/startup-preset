import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {
    onSubmit(event: React.FormEvent<unknown>): unknown
}

const AuthForm: React.FC<IProps> = ({ children, parentClass, onSubmit }) => {
    const classNames = classnames(
        css.authDescription,
        parentClass
    )

    return (
        <form className={classNames} onSubmit={onSubmit} noValidate>
            {children}
        </form>
    )
}

export default AuthForm
