import {
    POST_EMAIL_SETTING_REQUEST,
    POST_EMAIL_SETTING_SUCCESS,
    POST_EMAIL_SETTING_FAILURE
} from '../actions/Types.js'

const initialState = {
    loading: false,
}

const emailSettingReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_EMAIL_SETTING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_EMAIL_SETTING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload, 
            };
        case POST_EMAIL_SETTING_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
            };
        default:
            return state;
    }
}
export default emailSettingReducer;
