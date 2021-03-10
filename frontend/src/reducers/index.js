import { combineReducers } from 'redux';
import blogDetailsReducer from './BlogDetails';
import blogPostsReducer from './BlogPosts'
import blogsReducer from './Blogs'

export default combineReducers({
    blogPosts: blogPostsReducer,
    blogs: blogsReducer,
    blogDetails: blogDetailsReducer,

});