import axios from 'axios';

import { 
    POST_REPORT_BLOG_REQUEST, 
    POST_REPORT_BLOG_SUCCESS, 
    POST_REPORT_BLOG_FAILURE,
    GET_ERRORS
} from './Types';
import { BackendProd, BackendDev } from '../constants/Requests'
import { createMessage } from './Messages'


export const postReportBlog = ({name, url}) => {
    return dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        axios({
            method: 'post',
            url: 'api/report_blog',
            baseURL: BackendProd,
            config: {config},
            data: {
                name: name,
                url: url
            }
        })
        .then(response => {
            const reportBlog = response.data;
            dispatch(createMessage({reportedBlog: 'Reported blog successfully!'}))
            dispatch(postReportBlogSuccess(reportBlog))
        })
        .catch(error => {
            const errors = {
                message: error.response.data,
                status: error.response.status
            };
            dispatch(getErrors(errors))
        })
    }
}


export const postReportBlogRequest = () => {
    return {
        type: POST_REPORT_BLOG_REQUEST
    }
}

export const postReportBlogSuccess = reportBlog => {
    return {
        type: POST_REPORT_BLOG_SUCCESS,
        payload: reportBlog
    }
}

export const postReportBlogFailure = error => {
    return {
        type: POST_REPORT_BLOG_FAILURE,
        payload: error
    }
}

const getErrors = errors => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}