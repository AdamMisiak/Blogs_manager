import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Moment from 'moment';

import { postSubscribeBlog } from '../../actions/SubscribedBlogs';

import '../../styles/Blog.css';


const Blog = ({
    blog,
}) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();
        console.log(auth.user.id, blog.id)
        dispatch(postSubscribeBlog(auth.user.id, blog.id));
    };

    return (
        <div className="card text-center">
            <div className="card-header">
                <Link className="no-link" to={"/blogs/" + blog.id}>
                    {blog.name}
                </Link>
            </div>
            <div className="card-body">
                <h5 className="card-title">{blog.author}</h5>
                {blog.genre} | <a href="{blog.url}" className="card-text">{blog.url}</a>
            </div>

            <div className="subscribe card-footer text-muted">
                <div className="card-button">
                    <button className='button subscribe-button' id="blog{blog.id}" data-catid='{{ blog.id }}' onClick={onClick}>Subscribe</button>
                </div>
                {/* {% if blog.id not in subscribed_blogs %}
                        <div className="card-button">
                            <button className='button subscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Subscribe</button>
                        </div>
                    {% else %}
                        <div className="card-button">
                            <button className='button unsubscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Unsubscribe</button>
                        </div>
                    {% endif %} */}

                <hr className="my-2">
                </hr>
                Last post published: {Moment(blog.last_post_added).format('DD-MM-YYYY')}
            </div>
        </div>
    );
}

export default Blog;