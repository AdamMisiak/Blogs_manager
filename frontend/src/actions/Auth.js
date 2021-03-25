import axios from 'axios';

import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE 
} from './Types';


export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch(getUserRequest())

        const token = getState().auth.token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        
        if (token) {
            config.headers['Authorization'] = 'Token ' + token
        }

        axios({
            method: 'get',
            url: 'api/auth/user',
            baseURL: 'http://localhost:8000/',
            config: {config}
        })
            .then(response => {
                const user = response.data;
                dispatch(getUserSuccess(user))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getUserFailure(errorMessage))
            })
    }
}

export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
}

export const getUserSuccess = user => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    }
}

const getUserFailure = error => {
    return {
        type: GET_USER_FAILURE,
        payload: error
    }
}
