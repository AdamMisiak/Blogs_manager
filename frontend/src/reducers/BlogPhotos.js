import {
    GET_BLOG_PHOTO_REQUEST,
    GET_BLOG_PHOTO_SUCCESS,
    GET_BLOG_PHOTO_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    error: ''
}

const blogPhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_PHOTO_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_BLOG_PHOTO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                ...action.payload,
                
            };
        case GET_BLOG_PHOTO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
export default blogPhotoReducer;
