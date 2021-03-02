import React from 'react';
import Moment from 'moment';

import '../../styles/BlogPost.css';


const BlogPost = ({
    blogPost,
}) => {

    return (
        <div className="card text-center">
            <div className="card-header blog-post-header">
                <div className="card-header-info">

                </div>
                <div className="card-header-title">
                    {blogPost.name}
                </div>
                <div className="card-header-sign">
                    {/* {% if user.is_authenticated %}
                        {% if not blog_post.id in opened_blog_posts%}
                            <button id="blog_post{{ blog_post.id }}" className='new-sign'>NEW</button>
                        {% endif %}
                        {% if blog_post.blog.id in subscribed_blogs %}
                            <button className='subscribed-sign'>SUBSCRIBED</button>
                        {% endif %}
                    {% endif %} */}
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{blogPost.blog.author}</h5>
                <a href="{% url 'blog_info' pk=blog_post.blog.id %}" className="card-text no-link">{blogPost.blog.name} | </a>
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