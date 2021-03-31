import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import { Link } from "react-router-dom";

import '../../styles/BlogPost.css';


const BlogPost = ({
    blogPost,
}) => {
    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);

    const [subscribed, setSubscribed] = useState(false);

    const isNew = Moment(blogPost.added).isSame(Date.now(), 'day');

    useEffect(() => {
        subscribedBlogs.data.forEach(subscribedBlog => {
            if (blogPost.blog.id === subscribedBlog.id) {
                setSubscribed(true)
            }
        })
    })

    return (
        <div className="card text-center">
            <div className="card-header blog-post-header">
                <div className="card-header-info">

                </div>
                <div className="card-header-title">
                    {blogPost.name}
                </div>
                <div className="card-header-sign">
                    {isNew ? (
                        <button id="blog_post{{ blog_post.id }}" className='new-sign'>NEW</button>  
                    ) : ( null )}
                    {subscribed && auth.isAuthenticated ? (
                        <button className='subscribed-sign'>SUBSCRIBED</button>     
                    ) : ( null )}
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{blogPost.blog.author}</h5>
                <Link className="card-text no-link" to={"/blogs/" + blogPost.blog.id}>{blogPost.blog.name} | </Link>
                <a id="url"
                    href={blogPost.url}
                    data-catid='{blogPost.id}'
                    className="blog-post card-text"
                    target="_blank"
                    rel="noreferrer">
                    {blogPost.url}
                </a>
            </div>
            <div className="card-footer text-muted">
                Added: {Moment(blogPost.added).format('DD-MM-YYYY')}
            </div>
        </div>
    );
}

export default BlogPost;