import { combineReducers } from 'redux';
import blogPostsReducer from './BlogPosts'

export default combineReducers({
    blogPosts: blogPostsReducer

});