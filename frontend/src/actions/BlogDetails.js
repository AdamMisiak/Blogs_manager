import axios from 'axios';

import { 
    GET_BLOG_DETAILS_REQUEST, 
    GET_BLOG_DETAILS_SUCCESS, 
    GET_BLOG_DETAILS_FAILURE,
    GET_ERRORS
} from './Types';


export const getBlogDetails = (id) => {
    return (dispatch) => {
        dispatch(getBlogDetailsRequest())
        axios({
            method: 'get',
            url: 'api/blogs/' + id,
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogDetails = response.data;
                dispatch(getBlogDetailsSuccess(blogDetails))
            })
            .catch(error => {
                const errors = {
                    message: error.response.request.statusText,
                    status: error.response.status
                };
                dispatch(getErrors(errors))
                dispatch(getBlogDetailsFailure())
            })
    }
}

export const getBlogDetailsRequest = () => {
    return {
        type: GET_BLOG_DETAILS_REQUEST
    }
}

const getBlogDetailsSuccess = blogDetails => {
    return {
        type: GET_BLOG_DETAILS_SUCCESS,
        payload: blogDetails
    }
}

const getBlogDetailsFailure = () => {
    return {
        type: GET_BLOG_DETAILS_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
