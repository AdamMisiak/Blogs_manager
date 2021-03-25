import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
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
        case GET_USER_FAILURE:
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
