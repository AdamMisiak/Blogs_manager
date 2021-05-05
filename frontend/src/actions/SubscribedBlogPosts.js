import axios from 'axios';

import { 
    GET_SUBSCRIBED_BLOG_POSTS_REQUEST, 
    GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
    GET_SUBSCRIBED_BLOG_POSTS_FAILURE, 
    GET_ERRORS
} from './Types';


export const getSubscribedBlogPosts = ({page=1, userId, blogId, name, ordering}) => {
    return (dispatch) => {
        dispatch(getSubscribedBlogPostsRequest())
        axios({
            method: 'get',
            url: 'api/subscribed_blog_posts',
            baseURL: 'http://localhost:8000/',
            params: {
                page: page,
                user_id: userId,
                blog_id: blogId,
                name: name,
                ordering: ordering
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

export const getSubscribedBlogPostsSuccess = blogPosts => {
    return {
        type: GET_SUBSCRIBED_BLOG_POSTS_SUCCESS,
        payload: blogPosts
    }
}

export const getSubscribedBlogPostsFailure = () => {
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
