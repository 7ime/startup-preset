import * as React from 'react'
import classnames from 'classnames'
import {v4 as uuid} from 'uuid'
import {ICheckbox} from '../../model'
import css from '../../styles/checkbox.module.scss'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const Checkbox = (props: ICheckbox.Props) => {
    const {
        checked: externalChecked = false,
        type = '',
        disabled = false,
        error,
        errorMessage,
        success,
        successMessage,
        children,
        onChange
    } = props

    const [checked, setChecked] = React.useState(externalChecked)
    const [uuidCheckbox] = React.useState(uuid())

    React.useEffect(() => {
        setChecked(externalChecked)
    }, [externalChecked])

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }, [])

    const classNames = classnames(
        css.checkbox,
        {[css[type]]: type},
        {[css.is_checked]: checked},
        {[css.is_disabled]: disabled},
        {[css.is_error]: error},
        {[css.is_success]: success},
    )

    return (
        <div className={classNames}>
            <label htmlFor={uuidCheckbox} className={css.content}>
                <input type='checkbox'
                    onChange={handleChange}
                    className={css.control}
                    checked={checked}
                    id={uuidCheckbox}
                />
                <div className={css.pseudoControl}/>
                <div className={css.description}>{children}</div>
            </label>

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
}

export default React.memo(Checkbox)
