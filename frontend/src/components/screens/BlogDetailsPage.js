import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { getBlogDetails } from '../../actions/BlogDetails';
import Blog from '../common/Blog';
import Breadcrumb from '../layout/Breadcrumb';
import Alerts from '../layout/Alerts';
import blogDetailsReducer from '../../reducers/BlogDetails';

const override = "display: block; margin: 0 auto;";

function BlogDetailsPage({ blogDetails, getBlogDetails }) {
    var emojiFlags = require('emoji-flags');
    const location = useLocation();
    const currentId = location.pathname.split("/")[2];

    useEffect(() => {
        getBlogDetails(currentId)
    }, [])

    return blogDetails.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogDetails.error ? (
        <div>
            <Alerts 
                type="error"
                message={blogDetails.error}
            />
        </div> 
    ) : (
        <div>
            <Breadcrumb 
                previous='Blogs'
                current={currentId}
            />

<section id="blog_info" class="mt-3">
    <div class="card text-center blog-info-card">
        <div class="card-header blog-info-header">
            <h1>
                {blogDetails.name}
            </h1>
        </div>
            <div class="card-body blog-info-body">
                {/* <div class="blog-info-subcard blog-info-photo"> 
                    <img src="{{ blog.blog_photo.first.photo.url }}" alt="img" class="img-thumbnail">
                </div> */}
                <div class="blog-info-subcard blog-info-text">
                    Author: <b>{blogDetails.author}</b>
                    <hr class="mt-2 mb-2"/>
                    Genre: <b>{blogDetails.genre}</b>
                    <hr class="mt-2 mb-2"/>
                    Url: <b><a href="{{ blog.url }}" class="card-text no-link" target="_blank">{blogDetails.url}</a></b>
                    <hr class="mt-2 mb-2"/>
                        {blogDetails.language === 'Polish' ? (
                            <div>Language: <b>{blogDetails.language}<b></b>
                            {" "}{emojiFlags.countryCode('PL').emoji}</b></div>
                        ) : (
                            <div>Language: <b>{blogDetails.language}
                            {" "}{emojiFlags.countryCode('GB').emoji}</b></div>
                        )}
                </div>
                <div class="blog-info-subcard blog-info-stats">
                    {/* Last post published: <b>{{ blog.blog_post.first.added|date:"M d, Y" }}</b> */}
                    <hr class="mt-2 mb-2"/>
                    Published posts: <b>{blogDetails.blog_posts}</b>
                    <hr class="mt-2 mb-2"/>
                    Average posts per month: <b>{blogDetails.blog_post_avg}</b>
                    <hr class="mt-2 mb-2"/>
                    Subscribers: <b>{blogDetails.subscribers}</b>
                </div>
            </div>
        <div class="card-footer text-muted blog-info-footer">
        {/* {% if blog.id not in subscribed_blogs %}
            <div class="card-button">
                <button class='button subscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Subscribe</button>
            </div>
        {% else %}
            <div class="card-button">
                <button class='button unsubscribe-button' id="blog{{ blog.id }}" data-catid='{{ blog.id }}'>Unsubscribe</button>
            </div>
        {% endif %} */}
        </div>
    </div>
</section>

{/* <section id="posts">
    {% if blog_posts %}
        {% for blog_post in blog_posts %}
            <div class="card text-center">
                <div class="card-header">
                    {{ blog_post.name }}
                </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ blog_post.blog.author }}</h5>
                        {{blog.genre}} | <a href="{{ blog_posts.url }}" class="card-text">{{ blog_post.url }}</a>
                    </div>
                <div class="card-footer text-muted">
                Last post published: {{ blog_post.added|date:"M d, Y" }}
                </div>
            </div>
        {% endfor %}
    {% else %}
        <div class="col-md-12">
            <p>No Posts Available :(</p>
        </div>
    {% endif %}
</section> */}
        </div>
            );
}

const mapStateToProps = state => ({
    blogDetails: state.blogDetails.blogDetails
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogDetails: (currentId) => dispatch(getBlogDetails(currentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);
