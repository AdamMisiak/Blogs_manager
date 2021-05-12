import emailSettingReducer from '../EmailSetting';

import {
    POST_EMAIL_SETTING_REQUEST,
    POST_EMAIL_SETTING_SUCCESS,
    POST_EMAIL_SETTING_FAILURE
} from '../../actions/Types'

it('Handles actions of type POST_EMAIL_SETTING_REQUEST', () => {
    const action = {
        type: POST_EMAIL_SETTING_REQUEST,
    };
    const newState = emailSettingReducer([], action)

    expect(newState).toEqual({
        loading: true
    })
});

it('Handles actions of type POST_EMAIL_SETTING_SUCCESS', () => {
    const action = {
        type: POST_EMAIL_SETTING_SUCCESS,
        payload: {
            user: 11,
            status: "weekly"
        }
    };
    const newState = emailSettingReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: {
            user: 11,
            status: "weekly"
        }
    })
});

it('Handles actions of type POST_EMAIL_SETTING_FAILURE', () => {
    const action = {
        type: POST_EMAIL_SETTING_FAILURE,
    };
    const newState = emailSettingReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: []
    })
});