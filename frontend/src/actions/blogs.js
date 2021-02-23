import axios from 'axios';

import { GET_BLOGS } from './types';


export const getBlogs = () => {
    return function (dispatch) {
        axios.get('api/blogs/')
            .then(res => {
                dispatch({
                    type: GET_BLOGS,
                    payload: res.data
                });
            })
            .catch(error => console.log(error))
    }
}