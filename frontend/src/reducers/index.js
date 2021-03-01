import { combineReducers } from 'redux';
import blogPostsReducer from './BlogPost'

export default combineReducers({
    blogPosts: blogPostsReducer

});