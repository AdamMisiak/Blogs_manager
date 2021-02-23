import { GET_BLOG_POSTS } from '../actions/Types.js'

const initialState = {
    blog_posts: []
}

const blogPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_POSTS:
            return {
                ...state,
                blog_posts: action.payload
            };
        default:
            return state;
    }
}
export default blogPostsReducer;
