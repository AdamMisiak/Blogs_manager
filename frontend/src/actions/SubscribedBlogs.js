import axios from 'axios';

import { 
    GET_SUBSCRIBED_BLOGS_REQUEST, 
    GET_SUBSCRIBED_BLOGS_SUCCESS,
    GET_SUBSCRIBED_BLOGS_FAILURE, 
    GET_ERRORS, 
    POST_SUBSCRIBE_BLOG_REQUEST,
    POST_SUBSCRIBE_BLOG_SUCCESS,
    POST_SUBSCRIBE_BLOG_FAILURE
} from './Types';


export const getSubscribedBlogs = (user, page=1) => {
    return (dispatch) => {
        dispatch(getSubscribedBlogsRequest())
        axios({
            method: 'get',
            url: 'api/users/' + user + '/subscribed_blogs',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
            }
        })
            .then(response => {
                const subscribedBlogs = response.data;
                dispatch(getSubscribedBlogsSuccess(subscribedBlogs))
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

export const postSubscribeBlog = (user, blog) => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: 'api/blog_subscriber',
            baseURL: 'http://localhost:8000/',
            data: {
                user: user,
                blog: blog
            }
        })
            .then(response => {
                const subscribedBlogs = response.data;
                // dispatch(getSubscribedBlogsSuccess(subscribedBlogs))
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

export const postSubscribeBlogRequest = () => {
    return {
        type: POST_SUBSCRIBE_BLOG_REQUEST
    }
}

const postSubscribeBlogSuccess = blogs => {
    return {
        type: POST_SUBSCRIBE_BLOG_SUCCESS,
        payload: blogs
    }
}

const postSubscribeBlogFailure = () => {
    return {
        type: POST_SUBSCRIBE_BLOG_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
