import subscribedBlogPostsReducer from '../SubscribedBlogPosts';

import {
    GET_SUBSCRIBED_BLOG_POSTS_REQUEST,
    GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
    GET_SUBSCRIBED_BLOG_POSTS_FAILURE
} from '../../actions/Types'

it('Handles actions of type GET_SUBSCRIBED_BLOG_POSTS_REQUEST', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOG_POSTS_REQUEST,
    };
    const newState = subscribedBlogPostsReducer([], action)

    expect(newState).toEqual({
        loading: true
    })
});

it('Handles actions of type GET_SUBSCRIBED_BLOG_POSTS_SUCCESS', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
        payload: {
            loading: false,
            data: [],
            dataCount: undefined,
            next: undefined,
            previous: undefined    
        }
    };
    const newState = subscribedBlogPostsReducer([], action)

    expect(newState).toEqual({           
        loading: false,
        data: undefined,
        dataCount: undefined,
        next: undefined,
        previous: undefined
    })
});

it('Handles actions of type GET_SUBSCRIBED_BLOG_POSTS_FAILURE', () => {
    const action = {
        type: GET_SUBSCRIBED_BLOG_POSTS_FAILURE,
    };
    const newState = subscribedBlogPostsReducer([], action)

    expect(newState).toEqual({
        loading: false,
        data: []
    })
});