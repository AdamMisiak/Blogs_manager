import {
    POST_REPORT_BLOG_REQUEST,
    POST_REPORT_BLOG_SUCCESS,
    POST_REPORT_BLOG_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
}

const reportBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REPORT_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_REPORT_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload, 
            };
        case POST_REPORT_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
            };
        default:
            return state;
    }
}
export default reportBlogReducer;
