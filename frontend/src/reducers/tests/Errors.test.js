import errorReducer from '../Errors';

import {
    GET_ERRORS
} from '../../actions/Types'

it('Handles actions of type GET_ERRORS', () => {
    const action = {
        type: GET_ERRORS,
        payload: {
            message: 'test_message',
            status: 'test_message'
        }
    };
    const newState = errorReducer([], action)

    console.log(newState)

    expect(newState).toEqual({ 
        message: 'test_message',
        status: 'test_message' 
    })
});