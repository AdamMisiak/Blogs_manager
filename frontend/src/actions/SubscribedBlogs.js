import axios from 'axios';

import { 
    GET_SUBSCRIBED_BLOGS_REQUEST, 
    GET_SUBSCRIBED_BLOGS_SUCCESS,
    GET_SUBSCRIBED_BLOGS_FAILURE, 
    GET_ERRORS 
} from './Types';


export const getSubscribedBlogs = (user) => {
    return (dispatch) => {
        dispatch(getSubscribedBlogsRequest())
        axios({
            method: 'get',
            url: 'api/users/' + user + '/subscribed_blogs',
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogPosts = response.data;
                dispatch(getSubscribedBlogsSuccess(blogPosts))
            })
            .catch(error => {
                const errors = {
                    message: error.response.request.statusText,
                    status: error.response.status
                };
                dispatch(getErrors(errors))
                dispatch(getSubscribedBlogsFailure())
            })
    }
}

export const getSubscribedBlogsRequest = () => {
    return {
        type: GET_SUBSCRIBED_BLOGS_REQUEST
    }
}

const getSubscribedBlogsSuccess = blogs => {
    return {
        type: GET_SUBSCRIBED_BLOGS_SUCCESS,
        payload: blogs
    }
}

const getSubscribedBlogsFailure = () => {
    return {
        type: GET_SUBSCRIBED_BLOGS_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
