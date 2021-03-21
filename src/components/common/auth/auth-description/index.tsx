import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'

interface IProps extends IParentClass {

}

const AuthDescription: React.FC<IProps> = ({ children, parentClass }) => {
    const classNames = classnames(
        css.authDescription,
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default AuthDescription
