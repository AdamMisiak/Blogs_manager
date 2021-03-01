import axios from 'axios';

import { GET_BLOG_POSTS_REQUEST, GET_BLOG_POSTS_SUCCESS, GET_BLOG_POSTS_FAILURE } from './Types';


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

const getBlogPostsFailure = error => {
    return {
        type: GET_BLOG_POSTS_FAILURE,
        payload: error
    }
}

export const getBlogPosts = () => {
    return (dispatch) => {
        dispatch(getBlogPostsRequest)
        axios({
            method: 'get',
            url: 'api/blog_postsv/',
            baseURL: 'http://localhost:8000/',
        })
            .then(response => {
                const blogPosts = response.data
                dispatch(getBlogPostsSuccess(blogPosts))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(getBlogPostsFailure(errorMessage))
            })
    }
}

// export const getBlogPosts = () => {
//     return function (dispatch) {
//         axios({
//             method: 'get',
//             url: 'api/blog_posts/',
//             baseURL: 'http://localhost:8000/',
//         })
//             .then(res => {
//                 dispatch({
//                     type: GET_BLOG_POSTS_SUCCESS,
//                     payload: res.data
//                 });
//             })
//             .catch(error => console.log(error))
//     }
// }