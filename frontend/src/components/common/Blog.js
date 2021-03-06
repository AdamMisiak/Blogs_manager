import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Moment from 'moment';

import { postSubscribeBlog } from '../../actions/SubscribedBlogs';

import '../../styles/Blog.css';


const Blog = ({
    blog,
}) => {
    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);
    const dispatch = useDispatch();

    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        subscribedBlogs.data.forEach(subscribedBlog => {
            if (blog.id === subscribedBlog.id) {
                setSubscribed(true)
            }
        })
    }, [])

    const onClick = (event) => {
        event.preventDefault();
        dispatch(postSubscribeBlog(auth.user.id, blog.id));
        setSubscribed(!subscribed)
    };

    return (
        <div className="blog">
            <div className="blog-header">
                <Link className="no-link" to={"/blogs/" + blog.id}>
                    {blog.name}
                </Link>
            </div>
            <div className="blog-body">
                <h5 className="blog-title">{blog.author}</h5>
                {blog.genre} | <a href={blog.url} className="blog-text">{blog.url}</a>
            </div>
            <div className="blog-footer">
                <div className="blog-button">
                    <button
                        className={subscribed ? 'button unsubscribe-button' : 'button subscribe-button'} 
                        onClick={onClick}>
                        {subscribed ? 'Unsubscribe' : 'Subscribe'}
                    </button>
                </div>
                <hr className="my-2">
                </hr>
                Last post published: {Moment(blog.last_post_added).format('DD-MM-YYYY')}
            </div>
        </div>
    );
}

export default Blog;