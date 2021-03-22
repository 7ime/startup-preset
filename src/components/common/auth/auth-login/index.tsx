import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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
import {useTranslation} from 'react-i18next'
import {IFormInLocales} from '@models/form'

interface IFieldsValues {
    email: string;
    password: string;
}

const AuthLogin = () => {
    const {t} = useTranslation('auth')

    const {
        fields,
        submit
    } = t<IFormInLocales<IFieldsValues>>('auth:login.form', { returnObjects: true })

    const schema = yup.object().shape({
        email: yup.string().required(fields.email.errors?.required).email(fields.email.errors?.email),
        password: yup.string().required(fields.password.errors?.required).min(8, fields.password.errors?.min),
    })

    const {
        handleSubmit
    } = useForm<IFieldsValues>({
        resolver: yupResolver(schema),
    })

    const onSubmit = React.useCallback((data: IFieldsValues) => {
        console.log(data)
    }, [])

    return (
        <div className={css.authLogin}>
            <AuthContainer>
                <AuthTitle>{t('auth:login.title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('auth:login.description')}</AuthDescription>

                <AuthForm onSubmit={handleSubmit(onSubmit)}>
                    <AuthFormRow>
                        <Input label={'Email'} value={''} onChange={() => undefined} />
                    </AuthFormRow>

                    <AuthFormRow>
                        <InputPassword label='Password' value={''} onChange={() => undefined}/>
                    </AuthFormRow>

                    <AuthFormSubmit parentClass={css.submit}>
                        <Button type={'primary'} htmlType={'submit'} fill={'solid'}>{submit}</Button>
                    </AuthFormSubmit>
                </AuthForm>
            </AuthContainer>
        </div>
    )
}

export default AuthLogin
