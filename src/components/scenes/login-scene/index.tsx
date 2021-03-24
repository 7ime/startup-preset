import * as React from 'react'
import {Helmet} from 'react-helmet'
import AuthLayout from '@components/common/layouts/auth-layout'
import AuthLogin from '@components/common/auth/auth-login'
import {useTranslation} from 'react-i18next'

const LoginScene = () => {
    const {t} = useTranslation('login')

    return (
        <React.Fragment>
            <Helmet>
                <title>{t('login:pageTitle')}</title>
            </Helmet>

            <AuthLayout>
                <AuthLogin />
            </AuthLayout>
        </React.Fragment>
    )
}

export default LoginScene
