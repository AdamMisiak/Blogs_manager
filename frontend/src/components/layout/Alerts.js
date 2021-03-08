import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';

function Alerts({ alert }) {
    useEffect(() => {
        alert.show('it works')
    }, [])

    return <Fragment />
}

export default withAlert()(Alerts)
