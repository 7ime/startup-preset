import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const Input = (props: ITextField.InputProps) => {
    const {
        onReset,
        label,
        error,
        success,
        errorMessage,
        successMessage,
        onKeyPress,
        onPaste,
        name
    } = props

    const {
        handleFocus,
        handleBlur,
        handleChange,
        value,
        isFocused,
        nodeEl,
        autofocus,
        classNames,
    } = useTextField<HTMLInputElement>(props)

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [onReset])

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <input className={classnames(css.control, css.controlInput)}
                       onChange={handleChange}
                       onKeyPress={onKeyPress}
                       onPaste={onPaste}
                       autoFocus={autofocus}
                       ref={nodeEl}
                       value={value}
                       name={name}
                       tabIndex={-1}
                       type={'text'}/>
                {
                    isFocused && onReset && (
                        <div className={css.triggers}>
                            <div className={classnames(css.trigger, css.triggerClear)} onMouseDown={handleReset}/>
                        </div>
                    )
                }
            </div>

            {success && successMessage && (
                <ValidationMessage type={'success'} parentClass={css.validationMessage}>{successMessage}</ValidationMessage>
            )}

            {error && errorMessage && (
                <ValidationMessage type={'error'} parentClass={css.validationMessage}>{errorMessage}</ValidationMessage>
            )}
        </div>
    )
}

export default React.memo(Input)
