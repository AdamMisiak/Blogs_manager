import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withAlert } from 'react-alert';

import { 
    ERROR,
    INFO,
    SUCCESS
} from "../../constants/Alerts"

function Alerts({ 
    type, 
    message,
    alert
 }) {
    const error = useSelector(state => state.errors);

    useEffect(() => {
        if (type === ERROR){
            alert.error(message)
        } else if (type === INFO) {
            alert.info(message)
        } else if (type === SUCCESS) {
            alert.success(message)
        }
    }, [])

    return <Fragment />
}

export default withAlert()(Alerts)
