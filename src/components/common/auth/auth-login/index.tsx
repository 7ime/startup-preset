import * as React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import css from './index.module.scss'
import AuthContainer from '@components/common/auth/auth-container'
import AuthTitle from '@components/common/auth/auth-title'
import AuthDescription from '@components/common/auth/auth-description'
import AuthForm from '@components/common/auth/auth-form'
import Input from '@components/ui/textfields/components/input'
import Button from '@components/ui/buttons/components/button'
import AuthFormSubmit from '@components/common/auth/auth-form-submit'
import {useTranslation} from 'react-i18next'
import {IFormInLocales} from '@models/form'
import AuthFormRow from '@components/common/auth/auth-form-row'
import InputPassword from '@components/ui/textfields/components/input-password'

interface IFieldsValues {
    email: string;
    password: string;
}

const AuthLogin = () => {
    const {t} = useTranslation('login')

    const {
        fields,
        submit
    } = t<IFormInLocales<IFieldsValues>>('login:form', { returnObjects: true })

    const schema = yup.object().shape({
        email: yup.string().required(fields.email.errors?.required).email(fields.email.errors?.email),
        password: yup.string().required(fields.password.errors?.required).min(8, fields.password.errors?.min),
    })

    const {
        handleSubmit,
        control,
        errors,
        setValue,
        formState
    } = useForm<IFieldsValues>({
        resolver: yupResolver(schema)
    })

    const handleSubmitAfterValidation = React.useCallback((data: IFieldsValues) => {
        console.log(data)
    }, [])

    return (
        <div className={css.authLogin}>
            <AuthContainer>
                <AuthTitle>{t('login:title')}</AuthTitle>
                <AuthDescription parentClass={css.description}>{t('login:description')}</AuthDescription>

                <AuthForm onSubmit={handleSubmit(handleSubmitAfterValidation)}>
                    <AuthFormRow>
                        <Controller
                            name={fields.email.name}
                            control={control}
                            defaultValue={''}
                            render={({ onChange, value }) => (
                                <Input
                                    onChange={onChange}
                                    value={value}
                                    label={fields.email.label}
                                    error={!!errors.email}
                                    errorMessage={errors.email?.message}
                                    onReset={() => setValue('email', '', { shouldValidate: formState.isSubmitted })}
                                />
                            )}
                        />
                    </AuthFormRow>

                    <AuthFormRow>
                        <Controller
                            name={fields.password.name}
                            control={control}
                            defaultValue={''}
                            render={({ onChange, value }) => (
                                <InputPassword
                                    onChange={onChange}
                                    value={value}
                                    label={fields.password.label}
                                    error={!!errors.password}
                                    errorMessage={errors.password?.message}
                                    onReset={() => setValue('password', '', { shouldValidate: formState.isSubmitted })}
                                />
                            )}
                        />
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
