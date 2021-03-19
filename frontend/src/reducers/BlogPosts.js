import {
    GET_BLOG_POSTS_REQUEST,
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    error: '',
    data: []
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
                error: '',
                data: action.payload.results,
                dataCount: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous    
            };
        case GET_BLOG_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
                
            };
        default:
            return state;
    }
}
export default blogPostsReducer;
