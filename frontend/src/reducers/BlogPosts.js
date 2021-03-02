import {
    GET_BLOG_POSTS_REQUEST,
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    blogPosts: [],
    error: ''
}

const blogPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogPosts: action.payload,
                error: ''
            };
        case GET_BLOG_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                blogPosts: [],
                error: action.payload
            };
        default:
            return state;
    }
}
export default blogPostsReducer;
