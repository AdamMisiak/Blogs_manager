import blogsReducer from '../Blogs';

import {
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE
} from '../../actions/Types'

it('Handles actions of type GET_BLOGS_REQUEST', () => {
    const action = {
        type: GET_BLOGS_REQUEST,
    };
    const newState = blogsReducer([], action)

    expect(newState).toEqual({ loading: true })
});

it('Handles actions of type GET_BLOGS_SUCCESS', () => {
    const action = {
        type: GET_BLOGS_SUCCESS,
        payload: {               
            loading: false,
            data: [],
            dataCount: undefined,
            next: undefined,
            previous: undefined  
        }
    };
    const newState = blogsReducer([], action)

    expect(newState).toEqual({           
        loading: false,
        data: undefined,
        dataCount: undefined,
        next: undefined,
        previous: undefined
    })
});

it('Handles actions of type GET_BLOGS_FAILURE', () => {
    const action = {
        type: GET_BLOGS_FAILURE,
    };
    const newState = blogsReducer([], action)

    expect(newState).toEqual({ 
        loading: false,
        data: []
    })
});

it('Handles actions of the unknown type', () => {
    const newState = blogsReducer([], { type: 'UNKNOWN'})

    expect(newState).toEqual([])
});