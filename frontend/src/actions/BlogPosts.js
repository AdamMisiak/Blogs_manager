import axios from 'axios';

import { 
    GET_BLOG_POSTS_REQUEST, 
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAILURE, 
    GET_ERRORS 
} from './Types';


export const getBlogPosts = ({page=1, blogId, name, ordering}) => {
    return (dispatch) => {
        dispatch(getBlogPostsRequest())
        axios({
            method: 'get',
            url: 'api/blog_posts/',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
                blog_id: blogId,
                name: name,
                ordering: ordering
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
                dispatch(getBlogPostsFailure())
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

const getBlogPostsFailure = () => {
    return {
        type: GET_BLOG_POSTS_FAILURE,
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}
