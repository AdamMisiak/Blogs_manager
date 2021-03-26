import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_SUCCESS
} from '../actions/Types.js'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                ...action.payload,
            };
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                ...action.payload,
            }; 
        case GET_USER_FAILURE:
        case LOGIN_USER_FAILURE:
        case LOGOUT_USER_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}
export default authReducer;
