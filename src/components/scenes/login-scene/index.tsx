import * as React from 'react'
import {Helmet} from 'react-helmet'
import AuthLayout from '@components/common/layouts/auth-layout'
import AuthLogin from '@components/common/auth/auth-login'

const LoginScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <AuthLayout>
                <AuthLogin />
            </AuthLayout>
        </React.Fragment>
    )
}

export default LoginScene
