import axios from 'axios';

import { 
    GET_SUBSCRIBED_BLOG_POSTS_REQUEST, 
    GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
    GET_SUBSCRIBED_BLOG_POSTS_FAILURE, 
    GET_ERRORS
} from './Types';


export const getSubscribedBlogPosts = (user, page=1) => {
    return (dispatch) => {
        dispatch(getSubscribedBlogPostsRequest())
        axios({
            method: 'get',
            url: 'api/users/' + user + '/subscribed_blog_posts',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
            }
        })
        .then(response => {
            const subscribedBlogs = response.data;
            dispatch(getSubscribedBlogPostsSuccess(subscribedBlogs))
        })
        .catch(error => {
            const errors = {
                message: error.response ? error.response.request.statusText : 'Something went wrong, please refresh',
                status: error.response ? error.response.status : ""
            };
            dispatch(getErrors(errors))
            dispatch(getSubscribedBlogPostsFailure())
        })
    }
}


export const getSubscribedBlogPostsRequest = () => {
    return {
        type: GET_SUBSCRIBED_BLOG_POSTS_REQUEST
    }
}

const getSubscribedBlogPostsSuccess = blogs => {
    return {
        type: GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
        payload: blogs
    }
}

const getSubscribedBlogPostsFailure = () => {
    return {
        type: GET_SUBSCRIBED_BLOG_POSTS_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
