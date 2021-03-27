import axios from 'axios';

import { 
    GET_BLOG_POSTS_REQUEST, 
    GET_BLOG_POSTS_SUCCESS, 
    GET_ERRORS 
} from './Types';


export const getBlogPosts = (page=1, blogId) => {
    return (dispatch) => {
        dispatch(getBlogPostsRequest())
        axios({
            method: 'get',
            url: 'api/blog_posts/',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
                blog_id: blogId
            }
        })
            .then(response => {
                const blogPosts = response.data;
                dispatch(getBlogPostsSuccess(blogPosts))
            })
            .catch(error => {
                const errors = {
                    message: error.response.request.statusText,
                    status: error.response.status
                };
                dispatch(getErrors(errors))
            })
    }
}

export const getBlogPostsRequest = () => {
    return {
        type: GET_BLOG_POSTS_REQUEST
    }
}

const getBlogPostsSuccess = blogPosts => {
    return {
        type: GET_BLOG_POSTS_SUCCESS,
        payload: blogPosts
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
