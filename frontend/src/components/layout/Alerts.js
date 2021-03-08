import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';

function Alerts({ 
    type,
    message,
    alert
 }) {
    useEffect(() => {
        alert.error(message)
    }, [])

    return <Fragment />
}

export default withAlert()(Alerts)
