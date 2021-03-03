import React from 'react';
import Moment from 'moment';

import '../../styles/Blog.css';


const Blog = ({
    blog,
}) => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <a href="{% url 'blog_info' pk=blog.id %}" className="no-link">{blog.name}</a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{blog.author}</h5>
                {blog.genre} | <a href="{blog.url}" className="card-text">{blog.url}</a>
            </div>

            <div className="subscribe card-footer text-muted">
                {/* {% if blog.id not in subscribed_blogs %}
                        <div className="card-button">
                            <button className='button subscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Subscribe</button>
                        </div>
                    {% else %}
                        <div className="card-button">
                            <button className='button unsubscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Unsubscribe</button>
                        </div>
                    {% endif %} */}

                {/* <hr className="my-2"> */}
                {/* Last post published: {{ blog.blog_post.first.added | date:"M d, Y" }} */}
            </div>
        </div>
    );
}

export default Blog;