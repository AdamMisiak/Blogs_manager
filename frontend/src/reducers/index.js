import { combineReducers } from 'redux';
import blogPostsReducer from './BlogPosts'
import blogsReducer from './Blogs'

export default combineReducers({
    blogPosts: blogPostsReducer,
    blogs: blogsReducer,

});