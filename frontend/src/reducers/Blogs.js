import {
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
    error: '',
    data: []
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
                error: '',
                data: action.payload.results,
                dataCount: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous  
            };
        case GET_BLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
}
export default blogsReducer;
