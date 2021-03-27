import {
    CREATE_MESSAGE
} from '../actions/Types.js'

const initialState = {}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}
export default messagesReducer;
