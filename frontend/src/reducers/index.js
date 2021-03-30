import { combineReducers } from 'redux';
import authReducer from './Auth';
import blogDetailsReducer from './BlogDetails';
import blogPhotoReducer from './BlogPhotos';
import blogPostsReducer from './BlogPosts';
import blogsReducer from './Blogs';
import errorReducer from './Errors';
import messagesReducer from './Messages';
import subscribeBlogReducer from './SubscribeBlog';
import subscribedBlogsReducer from './SubscribedBlogs';

export default combineReducers({
    blogPosts: blogPostsReducer,
    blogs: blogsReducer,
    blogDetails: blogDetailsReducer,
    blogPhoto: blogPhotoReducer,
    subscribedBlogs: subscribedBlogsReducer,
    subscribeBlog: subscribeBlogReducer,
    auth: authReducer,
    errors: errorReducer,
    messages: messagesReducer
});