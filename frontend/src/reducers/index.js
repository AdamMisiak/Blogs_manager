import { combineReducers } from 'redux';
import authReducer from './Auth';
import blogDetailsReducer from './BlogDetails';
import blogPhotoReducer from './BlogPhotos';
import blogPostsReducer from './BlogPosts';
import blogsReducer from './Blogs';
import emailSettingReducer from './EmailSetting';
import errorReducer from './Errors';
import messagesReducer from './Messages';
import subscribeBlogReducer from './SubscribeBlog';
import subscribedBlogPostsReducer from './SubscribedBlogPosts';
import subscribedBlogsReducer from './SubscribedBlogs';

export default combineReducers({
    blogs: blogsReducer,
    subscribedBlogs: subscribedBlogsReducer,
    blogDetails: blogDetailsReducer,
    blogPhoto: blogPhotoReducer,
    blogPosts: blogPostsReducer,
    subscribedBlogPosts: subscribedBlogPostsReducer,

    auth: authReducer,
    errors: errorReducer,
    messages: messagesReducer,
    
    subscribeBlog: subscribeBlogReducer,
    emailSetting: emailSettingReducer,
});