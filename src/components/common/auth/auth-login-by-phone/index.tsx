import * as React from 'react'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import {useTranslation} from 'react-i18next'
import {transformCountriesToSelectOptions} from '@helpers/select-options/transform-countries-to-select-options'
import SimpleSelect from '@components/ui/select/components/simple-select'

const AuthLoginByPhone = () => {
    const {t} = useTranslation()
    const countries = t<Record<string, string>>('countries:data', { returnObjects: true })
    const countriesOptions = React.useMemo(() => transformCountriesToSelectOptions(countries), [])

    return (
        <div className={css.authLoginByPhone}>
            <AuthContainer>
                <AuthTitle>{t('loginByPhone:title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('loginByPhone:description')}</AuthDescription>

                <SimpleSelect label={'Country'} name={'country'} options={countriesOptions} />
            </AuthContainer>
        </div>
    )
}

export default AuthLoginByPhone
