import {
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_REQUEST
} from '../actions/Types.js'

const initialState = {
    blog_posts: []
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
                blog_posts: action.payload
            };
        default:
            return state;
    }
}
export default blogPostsReducer;
