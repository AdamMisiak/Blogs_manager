import blogPhotoReducer from '../BlogPhotos';

import {
    GET_BLOG_PHOTO_REQUEST,
    GET_BLOG_PHOTO_SUCCESS,
    GET_BLOG_PHOTO_FAILURE
} from '../../actions/Types'

it('Handles actions of type GET_BLOG_PHOTO_REQUEST', () => {
    const action = {
        type: GET_BLOG_PHOTO_REQUEST,
    };
    const newState = blogPhotoReducer([], action)

    expect(newState).toEqual({ loading: true })
});

it('Handles actions of type GET_BLOG_PHOTO_SUCCESS', () => {
    const action = {
        type: GET_BLOG_PHOTO_SUCCESS,
        payload: {               
            loading: false,
        }
    };
    const newState = blogPhotoReducer([], action)

    expect(newState).toEqual({           
        loading: false,
    })
});

it('Handles actions of type GET_BLOG_PHOTO_FAILURE', () => {
    const action = {
        type: GET_BLOG_PHOTO_FAILURE,
    };
    const newState = blogPhotoReducer([], action)

    expect(newState).toEqual({ 
        loading: false,
    })
});

it('Handles actions of the unknown type', () => {
    const newState = blogPhotoReducer([], { type: 'UNKNOWN'})

    expect(newState).toEqual([])
});