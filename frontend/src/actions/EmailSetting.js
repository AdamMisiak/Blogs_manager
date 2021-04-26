import axios from 'axios';

import { 
    POST_EMAIL_SETTING_REQUEST, 
    POST_EMAIL_SETTING_SUCCESS,
    POST_EMAIL_SETTING_FAILURE, 
    GET_ERRORS
} from './Types';
import { createMessage } from './Messages'



export const postEmailSetting = ({user, emailSetting}) => {
    return (dispatch) => {
        dispatch(postEmailSettingRequest())
        axios({
            method: 'post',
            url: 'api/email_setting',
            baseURL: 'http://localhost:8000/',
            data: {
                user: user,
                emailSetting: emailSetting
            }
        })
        .then(response => {
            const emailSetting = response.data;
            dispatch(postEmailSettingSuccess(emailSetting))
            dispatch(createMessage({emailSetting: emailSetting.status}))
        })
        .catch(error => {
            const errors = {
                message: error.response.request.statusText,
                status: error.response.status
            };
            dispatch(getErrors(errors))
            dispatch(postEmailSettingFailure())
        })
    }
}

export const postEmailSettingRequest = () => {
    return {
        type: POST_EMAIL_SETTING_REQUEST
    }
}

const postEmailSettingSuccess = emailSetting => {
    return {
        type: POST_EMAIL_SETTING_SUCCESS,
        payload: emailSetting
    }
}

const postEmailSettingFailure = () => {
    return {
        type: POST_EMAIL_SETTING_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}