import { combineReducers } from 'redux';
import blogDetailsReducer from './BlogDetails';
import blogPostsReducer from './BlogPosts'
import blogsReducer from './Blogs'
import blogPhotoReducer from './BlogPhotos'
import authReducer from './Auth'

export default combineReducers({
    blogPosts: blogPostsReducer,
    blogs: blogsReducer,
    blogDetails: blogDetailsReducer,
    blogPhoto: blogPhotoReducer,
    auth: authReducer
});