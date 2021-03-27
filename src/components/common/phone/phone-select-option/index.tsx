import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {getCountryCallingCode} from 'libphonenumber-js'
import {SelectComponents} from 'react-select/src/components'
import ISelect from '@components/ui/select/model'

const PhoneSelectOption: SelectComponents<ISelect.Option, false>['Option'] = (props) => {
    const {
        innerProps,
        data,
        isFocused,
        isSelected
    } = props

    const code = React.useMemo(() => getCountryCallingCode(data.value), [])

    const classNames = classnames(
        css.phoneSelectOption,
        {[css.isFocused]: isFocused},
        {[css.isSelected]: isSelected},
    )

    return (
        <div className={classNames} {...innerProps}>
            <div className={css.name}>{data.label}</div>
            <div className={css.code}>+{code}</div>
        </div>
    )
}

export default PhoneSelectOption
