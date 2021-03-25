import axios from 'axios';

import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE,
    POST_USER_SUCCESS,
    POST_USER_FAILURE 
} from './Types';


export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch(getUserRequest())

        const token = getState().auth.token;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        if (token) {
            config.headers['Authorization'] = 'Token ' + token
        };

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

export const login = (username, password) => {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios({
            method: 'post',
            url: 'api/auth/login',
            baseURL: 'http://localhost:8000/',
            config: {config},
            data: {
                username: username,
                password: password
            }
        })
            .then(response => {
                const user = response.data;
                dispatch(postUserSuccess(user))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(postUserFailure(errorMessage))
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

export const getUserFailure = error => {
    return {
        type: GET_USER_FAILURE,
        payload: error
    }
}

export const postUserSuccess = user => {
    return {
        type: POST_USER_SUCCESS,
        payload: user
    }
}

export const postUserFailure = error => {
    return {
        type: POST_USER_FAILURE,
        payload: error
    }
}

