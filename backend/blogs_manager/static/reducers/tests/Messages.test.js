import messagesReducer from '../Messages';

import {
    CREATE_MESSAGE
} from '../../actions/Types'

it('Handles actions of type CREATE_MESSAGE', () => {
    const action = {
        type: CREATE_MESSAGE,
        payload: 'test_message',
    };
    const newState = messagesReducer([], action)

    expect(newState).toEqual('test_message')
});