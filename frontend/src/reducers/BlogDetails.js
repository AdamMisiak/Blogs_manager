import {
    GET_BLOG_DETAILS_REQUEST,
    GET_BLOG_DETAILS_SUCCESS,
    GET_BLOG_DETAILS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    blogDetails: [],
    error: ''
}

const blogDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_BLOG_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogDetails: action.payload,
                error: ''
            };
        case GET_BLOG_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                blogDetails: [],
                error: action.payload
            };
        default:
            return state;
    }
}
export default blogDetailsReducer;
