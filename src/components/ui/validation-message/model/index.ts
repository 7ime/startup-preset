import * as React from 'react'
import {IParentClass} from '@models/shared'

namespace IValidationMessage {
    export interface Props extends IParentClass {
        type: 'error' | 'success'
        children?: React.ReactChild | React.ReactNode
    }
}

export default IValidationMessage
