import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {SelectComponents} from 'react-select/src/components'
import ISelect from '@components/ui/select/model'
import Flags from 'country-flag-icons/react/3x2'
import { hasFlag } from 'country-flag-icons'

const getElemFlag = ({value, label}: ISelect.Option) => {
    const isExist = hasFlag(value)

    if (isExist) {
        const Flag = Flags[value]

        return <Flag title={label} className={css.icon} />
    }

    return (
        <div className={classnames(css.icon, css.default)} />
    )
}

const PhoneSelectValueContainer: SelectComponents<ISelect.Option, false>['ValueContainer'] = (props) => {
    const {
        selectProps: {value},
        children
    } = props

    const classNames = classnames(
        css.phoneSelectValueContainer,
        {[css.withValue]: value},
    )

    return (
        <div className={classNames}>
            {value && getElemFlag(value as ISelect.Option)}
            {children}
        </div>
    )
}

export default PhoneSelectValueContainer
