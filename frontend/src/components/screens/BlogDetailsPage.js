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
    console.log(blogDetails, currentId);
    var page = "1"
    // USE HOOKS FOR THIS
    // PHOTO JAKO OSOBNY KOMPONENT, LOADING ERROR ITP?
    
    useEffect(() => {
        getBlogPosts({
            page: page,
            blogId: currentId
        })
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

        <section id="blog_info" className="mt-3">
            <div className="card text-center blog-info-card">
                <div className="card-header blog-info-header">
                    <h1>
                        {blogDetails.name}
                    </h1>
                </div>
                    <div className="card-body blog-info-body">
                        <div className="blog-info-subcard blog-info-photo"> 
                            <img src={protocol+"//"+hostname+":8000"+blogPhoto.photo} alt="img" className="img-thumbnail" />
                        </div>
                        <div className="blog-info-subcard blog-info-text">
                            Author: <b>{blogDetails.author}</b>
                            <hr className="mt-2 mb-2"/>
                            Genre: <b>{blogDetails.genre}</b>
                            <hr className="mt-2 mb-2"/>
                            Url: <b><a href={blogDetails.url} className="card-text no-link" target="_blank" rel="noreferrer">{blogDetails.url}</a></b>
                            <hr className="mt-2 mb-2"/>
                                {blogDetails.language === 'Polish' ? (
                                    <div>Language: <b>{blogDetails.language}<b></b>
                                    {" "}{emojiFlags.countryCode('PL').emoji}</b></div>
                                ) : (
                                    <div>Language: <b>{blogDetails.language}
                                    {" "}{emojiFlags.countryCode('GB').emoji}</b></div>
                                )}
                        </div>
                        <div className="blog-info-subcard blog-info-stats">
                            Last post published: <b>{Moment(blogDetails.last_post_added).format('DD-MM-YYYY')}</b>
                            <hr className="mt-2 mb-2"/>
                            Published posts: <b>{blogDetails.blog_posts}</b>
                            <hr className="mt-2 mb-2"/>
                            Average posts per month: <b>{blogDetails.blog_post_avg}</b>
                            <hr className="mt-2 mb-2"/>
                            Subscribers: <b>{blogDetails.subscribers}</b>
                        </div>
                    </div>
                <div className="card-footer text-muted blog-info-footer">
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

        {blogPosts.loading ? (
            <div>
                <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
            </div>
        ) : blogPosts.error ? (
            <div>
                <Alerts 
                    type="error"
                    message={blogPosts.error}
                />
            </div> 
        ) : (
            <section id="posts">
                {blogPosts.data.map(blogPost => (
                            <BlogPost
                                key={blogPost.id}
                                blogPost={blogPost}
                            />
                        ))}
            </section>
        )} 
    
        </div>
    );
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts,
    blogDetails: state.blogDetails,
    blogPhoto: state.blogPhoto
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: ({page, blogId}) => dispatch(getBlogPosts(page, blogId)),
        getBlogDetails: (currentId) => dispatch(getBlogDetails(currentId)),
        getBlogPhoto: (currentId) => dispatch(getBlogPhoto(currentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);
