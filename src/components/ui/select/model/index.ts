import {IParentClass} from '@models/shared'
import {NamedProps} from 'react-select/src/Select'

namespace ISelect {
    export interface Option {
        value: string
        label: string
    }

    export interface Props extends IParentClass {
        label: string
        name: string
        options: Option[]
        onChange?(option: Option | null): unknown
        components?: NamedProps['components']
    }
}

export default ISelect
