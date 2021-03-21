import * as React from 'react'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import classnames from 'classnames'
import Segment from '@components/ui/segment/components/segment'

interface IProps extends IParentClass {

}

const AuthContainer: React.FC<IProps> = ({ children, parentClass }) => {
    const classNames = classnames(
        css.authContainer,
        parentClass
    )

    return (
        <Segment parentClass={classNames}>
            {children}
        </Segment>
    )
}

export default AuthContainer
