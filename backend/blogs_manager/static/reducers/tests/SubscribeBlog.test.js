import subscribeBlogReducer from '../SubscribeBlog';

import {
    POST_SUBSCRIBE_BLOG_REQUEST,
    POST_SUBSCRIBE_BLOG_SUCCESS,
    POST_SUBSCRIBE_BLOG_FAILURE
} from '../../actions/Types'

it('Handles actions of type POST_SUBSCRIBE_BLOG_REQUEST', () => {
    const action = {
        type: POST_SUBSCRIBE_BLOG_REQUEST,
    };
    const newState = subscribeBlogReducer([], action)

    expect(newState).toEqual({
        loading: true
    })
});

it('Handles actions of type POST_SUBSCRIBE_BLOG_SUCCESS', () => {
    const action = {
        type: POST_SUBSCRIBE_BLOG_SUCCESS,
        payload: {
            blog: "16",
            user: 11,
            status: "subscribed"
        }
    };
    const newState = subscribeBlogReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: {
            blog: "16",
            user: 11,
            status: "subscribed"
        }
    })
});

it('Handles actions of type POST_SUBSCRIBE_BLOG_FAILURE', () => {
    const action = {
        type: POST_SUBSCRIBE_BLOG_FAILURE,
    };
    const newState = subscribeBlogReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: []
    })
});