import * as React from 'react'
import classnames from 'classnames'
import css from './index.module.scss'
import {IParentClass} from '@models/shared'
import InputNumber from '@components/ui/textfields/components/input-number'

interface IProps extends IParentClass {}

const PhoneCode = (props: IProps) => {
    const {
        parentClass
    } = props

    const classNames = classnames(
        css.phoneCode,
        parentClass
    )

    return (
        <div className={classNames}>
            <InputNumber label={'Code'} />
        </div>
    )
}

export default PhoneCode
