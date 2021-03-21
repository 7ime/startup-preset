import * as React from 'react'
import css from './index.module.scss'
import Copyright from '@components/common/copyright'

const AuthLayout: React.FC = ({ children }) => {
    return (
        <div className={css.authLayout}>
            <div className={css.body}>
                {children}
            </div>

            <div className={css.footer}>
                <Copyright />
            </div>
        </div>
    )
}

export default AuthLayout
