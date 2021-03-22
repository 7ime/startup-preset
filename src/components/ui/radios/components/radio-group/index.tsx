import * as React from 'react'
import classnames from 'classnames'
import {IRadio} from '../../model'
import css from '../../styles/radio-group.module.scss'
import {invariant} from '../../../../../helpers/invariant'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const RadioGroup = (props: IRadio.GroupProps) => {
    const {
        value,
        name,
        children,
        disabled,
        error,
        errorMessage,
        success,
        successMessage,
        onChange,
        parentClass
    } = props

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [onChange])

    return (
        <div className={classnames(css.radioGroup, parentClass)}>
            {
                React.Children.map(children, (child) => {
                    invariant(React.isValidElement(child), 'child element of the radio group is not valid')

                    const checked = child.props.value === value

                    return React.cloneElement<IRadio.ButtonProps>(child, {
                        onChange: handleChange,
                        name,
                        checked,
                        disabled: child.props.disabled || disabled,
                        error: child.props.error || error,
                        success: child.props.success || success
                    })
                })
            }

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
}

export default React.memo(RadioGroup)
