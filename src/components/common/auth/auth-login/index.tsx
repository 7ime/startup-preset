import * as React from 'react'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import AuthForm from '@components/common/auth/auth-form'
import Input from '@components/ui/textfields/components/input'
import InputPassword from '@components/ui/textfields/components/input-password'
import AuthFormRow from '@components/common/auth/auth-form-row'
import Button from '@components/ui/buttons/components/button'
import AuthFormSubmit from '@components/common/auth/auth-form-submit'

const AuthLogin = () => {
    return (
        <div className={css.authLogin}>
            <AuthContainer>
                <AuthTitle>Sign in</AuthTitle>
                <AuthDescription parentClass={css.description}>Please enter your email address and password to sign in to the site</AuthDescription>

                <AuthForm onSubmit={() => undefined}>
                    <AuthFormRow>
                        <Input label={'Email'} value={''} onChange={() => undefined} />
                    </AuthFormRow>

                    <AuthFormRow>
                        <InputPassword label='Password' value={''} onChange={() => undefined}/>
                    </AuthFormRow>

                    <AuthFormSubmit parentClass={css.submit}>
                        <Button type={'primary'} htmlType={'submit'} fill={'solid'}>Submit</Button>
                    </AuthFormSubmit>
                </AuthForm>
            </AuthContainer>
        </div>
    )
}

export default AuthLogin
