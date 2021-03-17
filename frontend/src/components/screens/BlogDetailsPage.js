import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import Moment from 'moment';
import ClipLoader from "react-spinners/ClipLoader";
import emojiFlags from 'emoji-flags';

import Alerts from '../layout/Alerts';
import Breadcrumb from '../layout/Breadcrumb';
import BlogPost from '../common/BlogPost'

import { getBlogPosts } from '../../actions/BlogPosts';
import { getBlogDetails } from '../../actions/BlogDetails';
import { getBlogPhoto } from '../../actions/BlogPhotos';

const override = "display: block; margin: 0 auto;";

function BlogDetailsPage({ 
    blogPosts,
    blogDetails, 
    blogPhoto,
    getBlogPosts,
    getBlogDetails,
    getBlogPhoto
 }) {
    const location = useLocation();
    const currentId = location.pathname.split("/")[2];
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    console.log(hostname);
    // USE HOOKS FOR THIS
    // PHOTO JAKO OSOBNY KOMPONENT, LOADING ERROR ITP?
    
    useEffect(() => {
        getBlogPosts(currentId)
        getBlogDetails(currentId)
        getBlogPhoto(currentId)
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
                <div class="blog-info-subcard blog-info-photo"> 
                    <img src={protocol+"//"+hostname+":8000"+blogPhoto.photo} alt="img" className="img-thumbnail" />
                </div>
                <div class="blog-info-subcard blog-info-text">
                    Author: <b>{blogDetails.author}</b>
                    <hr class="mt-2 mb-2"/>
                    Genre: <b>{blogDetails.genre}</b>
                    <hr class="mt-2 mb-2"/>
                    Url: <b><a href={blogDetails.url} class="card-text no-link" target="_blank" rel="noreferrer">{blogDetails.url}</a></b>
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
                    Last post published: <b>{Moment(blogDetails.last_post_added).format('DD-MM-YYYY')}</b>
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

<section id="posts">
            {blogPosts.blogPosts.map(blogPost => (
                        <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        />
                    ))}
</section>
        </div>
            );
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts,
    blogDetails: state.blogDetails.blogDetails,
    blogPhoto: state.blogPhoto.blogPhoto
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: (currentId) => dispatch(getBlogPosts(currentId)),
        getBlogDetails: (currentId) => dispatch(getBlogDetails(currentId)),
        getBlogPhoto: (currentId) => dispatch(getBlogPhoto(currentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);
