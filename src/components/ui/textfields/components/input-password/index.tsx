import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

enum EType {
    password = 'password',
    text = 'text',
}

const InputPassword = (props: ITextField.InputProps) => {
    const {
        onReset,
        label,
        error,
        success,
        errorMessage,
        successMessage,
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
        classNames
    } = useTextField<HTMLInputElement>(props)

    const [type, setType] = React.useState(EType.password)

    const handlerChangeType = React.useCallback(() => {
        const newType = type === EType.password ? EType.text : EType.password

        setType(newType)
    }, [type])

    const handleReset = React.useCallback(() => {
        onReset && onReset()
    }, [onReset])

    const classNamesForTriggerPassword = classnames(
        css.trigger,
        {[css.triggerEye]: type === EType.text},
        {[css.triggerEyeOff]: type === EType.password},
    )

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <input className={classnames(css.control, css.controlInput)}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       ref={nodeEl}
                       value={value}
                       name={name}
                       tabIndex={-1}
                       type={type}/>
                {
                    isFocused && (
                        <div className={css.triggers}>
                            <div className={classNamesForTriggerPassword} onMouseDown={handlerChangeType}/>
                            {
                                onReset && <div className={classnames(css.trigger, css.triggerClear)} onMouseDown={handleReset}/>
                            }
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

export default React.memo(InputPassword)
