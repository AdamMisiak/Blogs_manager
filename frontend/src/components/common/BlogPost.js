import React from 'react';
import Moment from 'moment';

import '../../styles/BlogPost.css';


const BlogPost = ({
    blogPost,
}) => {

    let date = new Date(blogPost.added)
    console.log(date)

    return (
        <div class="card text-center">
            <div class="card-header blog-post-header">
                <div class="card-header-info">

                </div>
                <div class="card-header-title">
                    {blogPost.name}
                </div>
                <div class="card-header-sign">
                    {/* {% if user.is_authenticated %}
                        {% if not blog_post.id in opened_blog_posts%}
                            <button id="blog_post{{ blog_post.id }}" class='new-sign'>NEW</button>
                        {% endif %}
                        {% if blog_post.blog.id in subscribed_blogs %}
                            <button class='subscribed-sign'>SUBSCRIBED</button>
                        {% endif %}
                    {% endif %} */}
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">{blogPost.blog.author}</h5>
                <a href="{% url 'blog_info' pk=blog_post.blog.id %}" class="card-text no-link">{blogPost.blog.name} | </a>
                <a id="url"
                    href={blogPost.url}
                    data-catid='{blogPost.id}'
                    class="blog-post card-text"
                    target="_blank"
                    rel="noreferrer">
                    {blogPost.url}
                </a>
            </div>
            <div class="card-footer text-muted">
                Added: {Moment(blogPost.added).format('DD-MM-YYYY')}
            </div>
        </div>
    );
}

export default BlogPost;