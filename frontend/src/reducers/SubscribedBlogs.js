import {
    GET_SUBSCRIBED_BLOGS_REQUEST,
    GET_SUBSCRIBED_BLOGS_SUCCESS,
    GET_SUBSCRIBED_BLOGS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    data: []
}

const subscribedBlogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIBED_BLOGS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SUBSCRIBED_BLOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload, 
            };
        case GET_SUBSCRIBED_BLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
            };
        default:
            return state;
    }
}
export default subscribedBlogsReducer;
