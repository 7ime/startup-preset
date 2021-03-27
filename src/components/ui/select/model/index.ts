import {IParentClass} from '@models/shared'

namespace ISelect {
    export interface Option {
        value: string
        label: string
    }

    export interface SimpleSelectProps extends IParentClass {
        label: string;
        name: string;
        options: Option[]
        onChange?(option: Option | null): unknown;
    }
}

export default ISelect
