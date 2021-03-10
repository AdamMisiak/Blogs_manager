import axios from 'axios';

import { 
    GET_BLOG_DETAILS_REQUEST, 
    GET_BLOG_DETAILS_SUCCESS, 
    GET_BLOG_DETAILS_FAILURE 
} from './Types';


export const getBlogDetails = () => {
    return (dispatch) => {
        dispatch(getBlogDetailsRequest())
        axios({
            method: 'get',
            url: 'api/blogs/',
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogDetails = response.data;
                dispatch(getBlogDetailsSuccess(blogDetails))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getBlogDetailsFailure(errorMessage))
            })
    }
}

export const getBlogDetailsRequest = () => {
    return {
        type: GET_BLOG_DETAILS_REQUEST
    }
}

const getBlogDetailsSuccess = blogs => {
    return {
        type: GET_BLOG_DETAILS_SUCCESS,
        payload: blogs
    }
}

const getBlogDetailsFailure = error => {
    return {
        type: GET_BLOG_DETAILS_FAILURE,
        payload: error
    }
}
