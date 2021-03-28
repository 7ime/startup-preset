import * as React from 'react'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import {useTranslation} from 'react-i18next'
import PhoneSelect from '@components/common/phone/phone-select'
import AuthForm from '@components/common/auth/auth-form'
import AuthFormRow from '@components/common/auth/auth-form-row'
import AuthFormSubmit from '@components/common/auth/auth-form-submit'
import Button from '@components/ui/buttons/components/button'
import PhoneCode from '@components/common/phone/phone-code-input'

const AuthLoginByPhone = () => {
    const {t} = useTranslation()

    return (
        <div className={css.authLoginByPhone}>
            <AuthContainer>
                <AuthTitle>{t('loginByPhone:title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('loginByPhone:description')}</AuthDescription>

                <AuthForm onSubmit={() => undefined}>
                    <AuthFormRow>
                        <PhoneSelect label={'Country'} name={'country'} />
                    </AuthFormRow>

                    <AuthFormRow>
                        <div className={css.phone}>
                            <div className={css.code}>
                                <PhoneCode />
                            </div>

                            <div className={css.number}>

                            </div>
                        </div>
                    </AuthFormRow>

                    <AuthFormSubmit>
                        <Button type={'primary'} htmlType={'submit'} fill={'solid'}>Submit</Button>
                    </AuthFormSubmit>
                </AuthForm>
            </AuthContainer>
        </div>
    )
}

export default AuthLoginByPhone
