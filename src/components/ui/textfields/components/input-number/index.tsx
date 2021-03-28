import * as React from 'react'
import {ITextField} from '../../model'
import Input from '@components/ui/textfields/components/input'

const InputNumber = (props: ITextField.InputNumberProps) => {
    const {
        regexpPatter = '^\\d+$',
        regexpFlags = 'g',
        ...otherProps
    } = props

    const regexp = new RegExp(regexpPatter, regexpFlags)

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const match =  event.key.match(regexp) || []

        if (!match.length) {
            event.preventDefault()
        }
    }

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const value = event.clipboardData.getData('Text')
        const match = value.match(regexp) || []

        if (value.length !== match.join('').length) {
            event.preventDefault()
        }
    }

    return (
        <Input {...otherProps}
               onKeyPress={handleKeyPress}
               onPaste={handlePaste}
        />
    )
}

export default React.memo(InputNumber)
