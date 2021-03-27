import * as React from 'react'
import classnames from 'classnames'
import {useTranslation} from 'react-i18next'
import css from './index.module.scss'
import {transformCountriesToSelectOptions} from '@helpers/select-options/transform-countries-to-select-options'
import Select from '@components/ui/select/components/select'
import PhoneSelectOption from '@components/common/phone/phone-select-option'
import {IParentClass} from '@models/shared'


interface IProps extends IParentClass {
    label: string;
    name: string;
}

const PhoneSelect = (props: IProps) => {
    const {
        label,
        name,
        parentClass
    } = props

    const {t} = useTranslation()
    const countries = t<Record<string, string>>('countries:data', { returnObjects: true })
    const countriesOptions = React.useMemo(() => transformCountriesToSelectOptions(countries), [])

    const classNames = classnames(
        css.phoneSelect,
        parentClass
    )

    return (
        <div className={classNames}>
            <Select label={label} name={name} options={countriesOptions} components={{Option: PhoneSelectOption}}/>
        </div>
    )
}

export default PhoneSelect
