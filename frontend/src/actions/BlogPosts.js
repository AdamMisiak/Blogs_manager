import axios from 'axios';

import { GET_BLOG_POSTS_REQUEST, GET_BLOG_POSTS_SUCCESS } from './Types';


export const getBlogPosts = () => {
    return function (dispatch) {
        axios({
            method: 'get',
            url: 'api/blog_posts/',
            baseURL: 'http://localhost:8000/',
        })
            .then(res => {
                dispatch({
                    type: GET_BLOG_POSTS_SUCCESS,
                    payload: res.data
                });
            })
            .catch(error => console.log(error))
    }
}