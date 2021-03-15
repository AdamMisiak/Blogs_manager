import axios from 'axios';

import { 
    GET_BLOG_PHOTO_REQUEST, 
    GET_BLOG_PHOTO_SUCCESS, 
    GET_BLOG_PHOTO_FAILURE 
} from './Types';


export const getBlogPhoto = (id) => {
    return (dispatch) => {
        dispatch(getBlogPhotoRequest())
        axios({
            method: 'get',
            url: 'api/blog_photos/' + id,
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogPhoto = response.data;
                dispatch(getBlogPhotoSuccess(blogPhoto))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getBlogPhotoFailure(errorMessage))
            })
    }
}

export const getBlogPhotoRequest = () => {
    return {
        type: GET_BLOG_PHOTO_REQUEST
    }
}

const getBlogPhotoSuccess = blogPhoto => {
    return {
        type: GET_BLOG_PHOTO_SUCCESS,
        payload: blogPhoto
    }
}

const getBlogPhotoFailure = error => {
    return {
        type: GET_BLOG_PHOTO_FAILURE,
        payload: error
    }
}
