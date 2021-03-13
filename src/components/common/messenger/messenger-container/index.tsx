import * as React from 'react'

import css from './index.module.scss'

const MessengerContainer: React.FC = ({ children }) => {
    return (
        <div className={css.root}>
            {children}
        </div>
    )
}

export default MessengerContainer
