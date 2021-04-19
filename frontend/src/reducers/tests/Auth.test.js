import authReducer from '../Auth';

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
} from '../../actions/Types'

it('Handles actions of type GET_USER_REQUEST', () => {
    const action = {
        type: GET_USER_REQUEST,
    };
    const newState = authReducer([], action)

    expect(newState).toEqual({ loading: true })
});

it('Handles actions of type GET_USER_SUCCESS', () => {
    const action = {
        type: GET_USER_SUCCESS,   
        payload: {
            username: 'test',
            email: 'test@test.com',
            token: 'test'
        }          
    };
    const newState = authReducer([], action)

    expect(newState).toEqual({           
        isAuthenticated: true,
        loading: false,
        user: {
            username: 'test',
            email: 'test@test.com',
            token: 'test'
        }
    })
});

it('Handles actions of type GET_USER_FAILURE', () => {
    const action = {
        type: GET_USER_FAILURE,      
    };
    const newState = authReducer([], action)

    console.log(newState)
// NEED TO ADD TESTING LOCAL STORAGE
    expect(newState).toEqual({           
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: ''
    })
});
