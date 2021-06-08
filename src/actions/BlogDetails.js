import axios from 'axios';

import { 
    GET_BLOG_DETAILS_REQUEST, 
    GET_BLOG_DETAILS_SUCCESS, 
    GET_BLOG_DETAILS_FAILURE,
    GET_ERRORS
} from './Types';
import { BackendProd, BackendDev } from '../constants/Requests'


export const getBlogDetails = (id) => {
    return (dispatch) => {
        dispatch(getBlogDetailsRequest())
        axios({
            method: 'get',
            url: 'api/blogs/' + id + '/',
            baseURL: BackendProd,
        })
        .then(response => {
            const blogDetails = response.data;
            dispatch(getBlogDetailsSuccess(blogDetails))
        })
        .catch(error => {
            const errors = {
                message: error.response ? error.response.request.statusText : 'Something went wrong, please refresh',
                status: error.response ? error.response.status : ""
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

export const getBlogDetailsSuccess = blogDetails => {
    return {
        type: GET_BLOG_DETAILS_SUCCESS,
        payload: blogDetails
    }
}

export const getBlogDetailsFailure = () => {
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
