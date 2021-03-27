import * as React from 'react'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import {useTranslation} from 'react-i18next'
import PhoneSelect from '@components/common/phone/phone-select'

const AuthLoginByPhone = () => {
    const {t} = useTranslation()

    return (
        <div className={css.authLoginByPhone}>
            <AuthContainer>
                <AuthTitle>{t('loginByPhone:title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('loginByPhone:description')}</AuthDescription>

                <PhoneSelect label={'Country'} name={'country'} />
            </AuthContainer>
        </div>
    )
}

export default AuthLoginByPhone
