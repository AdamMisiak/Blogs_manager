import { 
    GET_SUBSCRIBED_BLOG_POSTS_REQUEST, 
    GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
    GET_SUBSCRIBED_BLOG_POSTS_FAILURE, 
} from '../actions/Types.js'

const initialState = {
    loading: false,
    data: []
}

const subscribedBlogPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIBED_BLOG_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SUBSCRIBED_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                dataCount: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous  
            };
        case GET_SUBSCRIBED_BLOG_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
            };
        default:
            return state;
    }
}
export default subscribedBlogPostsReducer;
