import axios from 'axios';

import { 
    GET_BLOG_PHOTO_REQUEST, 
    GET_BLOG_PHOTO_SUCCESS, 
    GET_BLOG_PHOTO_FAILURE,
    GET_ERRORS
} from './Types';
import { BackendProd, BackendDev } from '../constants/Requests'


export const getBlogPhoto = (id) => {
    return (dispatch) => {
        dispatch(getBlogPhotoRequest())
        axios({
            method: 'get',
            url: 'api/blog_photos/' + id,
            baseURL: BackendProd,
        })
            .then(response => {
                const blogPhoto = response.data;
                dispatch(getBlogPhotoSuccess(blogPhoto))
            })
            .catch(error => {
                const errors = {
                    message: error.response ? error.response.request.statusText : 'Something went wrong, please refresh',
                    status: error.response ? error.response.status : ""
                };
                dispatch(getErrors(errors))
                dispatch(getBlogPhotoFailure())
            })
    }
}

export const getBlogPhotoRequest = () => {
    return {
        type: GET_BLOG_PHOTO_REQUEST
    }
}

export const getBlogPhotoSuccess = blogPhoto => {
    return {
        type: GET_BLOG_PHOTO_SUCCESS,
        payload: blogPhoto
    }
}

export const getBlogPhotoFailure = () => {
    return {
        type: GET_BLOG_PHOTO_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}