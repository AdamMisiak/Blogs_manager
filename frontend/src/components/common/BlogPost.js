import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../../styles/BlogPost.css';


const BlogPost = ({
    blogPost,
}) => {
    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);

    const [subscribed, setSubscribed] = useState(false);

    const isNew = Moment(blogPost.date).isSame(Date.now(), 'day');

    useEffect(() => {
        subscribedBlogs.data.forEach(subscribedBlog => {
            if (blogPost.blog.id === subscribedBlog.id) {
                setSubscribed(true)
            }
        })
    })

    return (
        <div className="blog-post card">
            <div className="blog-post-header">
                <div className="blog-post-header-info">

                </div>
                <div className="blog-post-header-title">
                    {blogPost.name}
                </div>
                <div className="blog-post-header-sign">
                    {isNew ? (
                        <button className='new-sign'>NEW</button>  
                    ) : ( null )}
                    {subscribed && auth.isAuthenticated ? (
                        <button className='subscribed-sign'>SUBSCRIBED</button>     
                    ) : ( null )}
                </div>
            </div>
            <div className="blog-post-body">
                <h5 className="blog-post-title">{blogPost.blog.author}</h5>
                {/* <Link className="blog-post-title" to={"/blogs/" + blogPost.blog.id}>{blogPost.blog.author}</Link> */}
                <Link className="blog-post-text no-link" to={"/blogs/" + blogPost.blog.id}>{blogPost.blog.name} | </Link>
                <a
                    href={blogPost.url}
                    className="blog-post-text"
                    target="_blank"
                    rel="noreferrer">
                    {blogPost.url}
                </a>
            </div>
            <div className="blog-post-footer">
                Added: {Moment(blogPost.date).format('DD-MM-YYYY')}
            </div>
        </div>
    );
}

export default BlogPost;