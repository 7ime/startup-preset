import * as React from 'react'
import {IFieldValidationStatus} from '../../../../models/field-validation-status'

export namespace ITextField {
    export interface BaseProps extends IFieldValidationStatus {
        label: string
        value?: string

        disabled?: boolean
        autofocus?: boolean
        name?: string
        onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): unknown
    }

    export interface TextareaProps extends BaseProps {
        rows?: number
    }

    export interface InputProps extends BaseProps {
        onReset?(): unknown
        onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void
        onPaste?(event: React.ClipboardEvent<HTMLInputElement>): void
    }

    export interface InputNumberProps extends InputProps {
        regexpPatter?: string
        regexpFlags?: string
    }
}
