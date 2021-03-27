import * as React from 'react'
import classnames from 'classnames'
import Select from 'react-select'
import css from '../../styles/select.module.scss'
import ISelect from '../../model'

const SimpleSelect = (props: ISelect.SimpleSelectProps) => {
    const {
        label,
        name,
        onChange,
        options,
        parentClass
    } = props

    const [selectedValue, setSelectedValue] = React.useState<string | null>(null)
    const [focused, setFocused] = React.useState(false)

    const handleChange = (option: ISelect.Option | null) => {
        setSelectedValue(option ? option.value : null)
        onChange && onChange(option)
    }

    const classNames = classnames(
        css.select,
        {[css.selected]: selectedValue !== null},
        {[css.focused]: focused},
        parentClass
    )

    return (
        <div className={classNames}>
            <div className={css.label}>{label}</div>
            <Select
                name={name}
                options={options}
                noOptionsMessage={() => 'Not found'}
                classNamePrefix="Select"
                onChange={handleChange}
                onMenuOpen={() => setFocused(true)}
                onMenuClose={() => setFocused(false)}
            />
        </div>
    )
}

export default React.memo(SimpleSelect)
