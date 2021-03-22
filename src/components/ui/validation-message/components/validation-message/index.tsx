import * as React from 'react'
import classnames from 'classnames'
import css from '../../styles/validation-message.module.scss'
import IValidationMessage from '@components/ui/validation-message/model'

const ValidationMessage = (props: IValidationMessage.Props) => {
    const {
        type,
        children,
        parentClass,
    } = props

    const classNames = classnames(
        css.validationMessage,
        {[css[type]]: type},
        parentClass
    )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}

export default React.memo(ValidationMessage)
