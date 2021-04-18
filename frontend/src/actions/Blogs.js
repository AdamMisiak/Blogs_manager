import axios from 'axios';

import { 
    GET_BLOGS_REQUEST, 
    GET_BLOGS_SUCCESS, 
    GET_BLOGS_FAILURE,
    GET_ERRORS, 
} from './Types';


export const getBlogs = ({page=1}) => {
    return (dispatch) => {
        dispatch(getBlogsRequest())
        axios({
            method: 'get',
            url: 'api/blogs/',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
            }
        })
            .then(response => {
                const blogs = response.data;
                dispatch(getBlogsSuccess(blogs))
            })
            .catch(error => {
                const errors = {
                    message: error.response.request.statusText,
                    status: error.response.status
                };
                dispatch(getErrors(errors))
                dispatch(getBlogsFailure())
            })
    }
}

export const getBlogsRequest = () => {
    return {
        type: GET_BLOGS_REQUEST
    }
}

export const getBlogsSuccess = blogs => {
    return {
        type: GET_BLOGS_SUCCESS,
        payload: blogs
    }
}

export const getBlogsFailure = () => {
    return {
        type: GET_BLOGS_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}