import axios from 'axios';

import { GET_BLOGS_REQUEST, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from './Types';


export const getBlogs = () => {
    return (dispatch) => {
        dispatch(getBlogsRequest())
        axios({
            method: 'get',
            url: 'api/blogs/',
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogs = response.data;
                dispatch(getBlogsSuccess(blogs))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(getBlogsFailure(errorMessage))
            })
    }
}

export const getBlogsRequest = () => {
    return {
        type: GET_BLOGS_REQUEST
    }
}

const getBlogsSuccess = blogs => {
    return {
        type: GET_BLOGS_SUCCESS,
        payload: blogs
    }
}

const getBlogsFailure = error => {
    return {
        type: GET_BLOGS_FAILURE,
        payload: error
    }
}
