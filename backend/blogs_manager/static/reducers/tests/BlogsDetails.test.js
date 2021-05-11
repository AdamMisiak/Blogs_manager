import blogDetailsReducer from '../BlogDetails';

import {
    GET_BLOG_DETAILS_REQUEST,
    GET_BLOG_DETAILS_SUCCESS,
    GET_BLOG_DETAILS_FAILURE
} from '../../actions/Types'

it('Handles actions of type GET_BLOG_DETAILS_REQUEST', () => {
    const action = {
        type: GET_BLOG_DETAILS_REQUEST,
    };
    const newState = blogDetailsReducer([], action)

    expect(newState).toEqual({ loading: true })
});

it('Handles actions of type GET_BLOG_DETAILS_SUCCESS', () => {
    const action = {
        type: GET_BLOG_DETAILS_SUCCESS,
        payload: {               
            loading: false,
        }
    };
    const newState = blogDetailsReducer([], action)

    expect(newState).toEqual({           
        loading: false,
    })
});

it('Handles actions of type GET_BLOG_DETAILS_FAILURE', () => {
    const action = {
        type: GET_BLOG_DETAILS_FAILURE,
    };
    const newState = blogDetailsReducer([], action)

    expect(newState).toEqual({ 
        loading: false,
    })
});

it('Handles actions of the unknown type', () => {
    const newState = blogDetailsReducer([], { type: 'UNKNOWN'})

    expect(newState).toEqual([])
});