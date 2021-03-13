import * as React from 'react'
import {Helmet} from 'react-helmet'
import Messenger from '@components/common/messenger/messenger'

const MessengerScene = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Messenger</title>
            </Helmet>
            <Messenger />
        </React.Fragment>
    )
}

export default MessengerScene
