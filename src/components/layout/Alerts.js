import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withAlert } from 'react-alert';

function Alerts({ 
    alert
 }) {
    const error = useSelector(state => state.errors);
    const message = useSelector(state => state.messages);

    useEffect(() => {
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
        if (error.status === 404) {
            alert.error(error.status + ': ' + error.message)
        }
        if (error.message && error.status === "") {
            alert.error(error.message)
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
        if (message.passwordNotMatch) {
            alert.error(message.passwordNotMatch)
        }
        if (message.subscribeBlog) {
            alert.success('Blog ' + message.subscribeBlog + ' successfully')
        }
        if (message.emailSetting) {
            alert.success('Email frequency set to ' + message.emailSetting)
        }
    }, [message])


    return <Fragment />
}

export default withAlert()(Alerts)
