import {
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    blogs: [],
    error: ''
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_BLOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload,
                error: ''
            };
        case GET_BLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                blogs: [],
                error: action.payload
            };
        default:
            return state;
    }
}
export default blogsReducer;
