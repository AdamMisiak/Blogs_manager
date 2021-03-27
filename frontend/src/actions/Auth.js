import axios from 'axios';

import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE, 
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    GET_ERRORS
} from './Types';


export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch(getUserRequest())

        const token = getState().auth.token;

        axios({
            method: 'get',
            url: 'api/auth/user',
            baseURL: 'http://localhost:8000/',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
            }
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
                dispatch(loginUserSuccess(user))
            })
            .catch(error => {
                const errors = {
                    message: error.response.data,
                    status: error.response.status
                };
                dispatch(getErrors(errors))
                // console.log(error.response)
                // const errorMessage = error.message;
                // dispatch(loginUserFailure(errorMessage))
            })
    }
}

export const register = ({ username, email, password }) => {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios({
            method: 'post',
            url: 'api/auth/register',
            baseURL: 'http://localhost:8000/',
            config: {config},
            data: {
                username: username,
                email: email,
                password: password
            }
        })
            .then(response => {
                const user = response.data;
                dispatch(registerUserSuccess(user))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(registerUserFailure(errorMessage))
            })
    }
}

export const logout = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;

        axios({
            method: 'post',
            url: 'api/auth/logout',
            baseURL: 'http://localhost:8000/',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
            },
            body: null
        })
            .then(response => {
                dispatch(logoutUserSuccess())
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(logoutUserFailure(errorMessage))
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

export const loginUserSuccess = user => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    }
}

export const loginUserFailure = error => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
}

export const registerUserSuccess = user => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: user
    }
}

export const registerUserFailure = error => {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
}

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
    }
}

export const logoutUserFailure = error => {
    return {
        type: LOGOUT_USER_FAILURE,
        payload: error
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
