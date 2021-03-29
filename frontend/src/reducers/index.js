import { combineReducers } from 'redux';
import authReducer from './Auth';
import blogDetailsReducer from './BlogDetails';
import blogPhotoReducer from './BlogPhotos';
import blogPostsReducer from './BlogPosts';
import blogsReducer from './Blogs';
import errorReducer from './Errors';
import messagesReducer from './Messages';
import subscribedBlogsReducer from './SubscribedBlogs';

export default combineReducers({
    blogPosts: blogPostsReducer,
    blogs: blogsReducer,
    blogDetails: blogDetailsReducer,
    blogPhoto: blogPhotoReducer,
    subscribedBlogs: subscribedBlogsReducer,
    auth: authReducer,
    errors: errorReducer,
    messages: messagesReducer
});