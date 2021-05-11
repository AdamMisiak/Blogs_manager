import subscribedBlogsReducer from '../SubscribedBlogs';

import {
    GET_SUBSCRIBED_BLOGS_REQUEST,
    GET_SUBSCRIBED_BLOGS_SUCCESS,
    GET_SUBSCRIBED_BLOGS_FAILURE
} from '../../actions/Types'

it('Handles actions of type GET_SUBSCRIBED_BLOGS_REQUEST', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOGS_REQUEST,
    };
    const newState = subscribedBlogsReducer([], action)

    expect(newState).toEqual({
        loading: true
    })
});

it('Handles actions of type GET_SUBSCRIBED_BLOGS_SUCCESS', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOGS_SUCCESS,
        payload: [
            {
                id:1,
                name: 'test_one'
            },
            {
                id:2,
                name: 'test_two'
            }
        ]
    };
    const newState = subscribedBlogsReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: [
            {
                id:1,
                name: 'test_one'
            },
            {
                id:2,
                name: 'test_two'
            }
        ]
    })
});

it('Handles actions of type GET_SUBSCRIBED_BLOGS_FAILURE', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOGS_FAILURE,
    };
    const newState = subscribedBlogsReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: []
    })
});