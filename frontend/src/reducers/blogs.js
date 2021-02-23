import { GET_BLOGS } from '../actions/types.js'

const initialState = {
    blogs: []
}

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        default:
            return state;
    }
}
export default blogsReducer;
