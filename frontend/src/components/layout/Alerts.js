import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withAlert } from 'react-alert';

function Alerts({ 
    alert
 }) {
    const error = useSelector(state => state.errors);
    const message = useSelector(state => state.messages);

    useEffect(() => {
        console.log(error)
        if (error.message.username) {
            alert.error('Username:' + error.message.username.join())
        }
        if (error.message.email) {
            alert.error('Email:' + error.message.email.join())
        }
        if (error.message.password) {
            alert.error('Password:' + error.message.password.join())
        }
        if (error.message.non_field_errors) {
            alert.error(error.message.non_field_errors.join())
        }
        if (error.status == 404) {
            alert.error(error.status + ': ' + error.message)
        }
    }, [error]);

    useEffect(() => {
        if (message.loggedIn) {
            alert.success(message.loggedIn)
        }
        if (message.loggedOut) {
            alert.success(message.loggedOut)
        }
        if (message.registered) {
            alert.success(message.registered)
        }
    }, [message])


    return <Fragment />
}

export default withAlert()(Alerts)
