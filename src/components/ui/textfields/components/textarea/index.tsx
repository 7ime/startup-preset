import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import ValidationMessage from '@components/ui/validation-message/components/validation-message'

const Textarea = (props: ITextField.TextareaProps) => {
    const {
        label,
        rows = 5,
        error,
        success,
        errorMessage,
        successMessage
    } = props

    const {
        handleFocus,
        handleBlur,
        handleChange,
        value,
        nodeEl,
        autofocus,
        classNames
    } = useTextField<HTMLTextAreaElement>(props)

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapTextArea)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <textarea className={classnames(css.control, css.controlTextarea, 'scrollbar')}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       rows={rows}
                       tabIndex={-1}
                       ref={nodeEl}
                       value={value}/>
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

export default React.memo(Textarea)
