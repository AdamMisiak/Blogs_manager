import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
// zmianiec moment na datafns!!!!
import ClipLoader from "react-spinners/ClipLoader";
import emojiFlags from 'emoji-flags';

import Pagination from '@material-ui/lab/Pagination';

import { getBlogPosts } from '../../actions/BlogPosts';
import { getBlogDetails } from '../../actions/BlogDetails';
import { getBlogPhoto } from '../../actions/BlogPhotos';

import Alerts from '../layout/Alerts';
import Breadcrumb from '../layout/Breadcrumb';
import BlogPost from '../common/BlogPost'

import { LightBlue } from "../../constants/Colors"
import { LoaderStyles, LoaderSize } from "../../constants/Loader"
import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination"

function BlogDetailsPage() {
    const { id } = useParams();
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const [page, setPage] = useState(DefaultPage);

    const blogPosts = useSelector(state => state.blogPosts);
    const blogDetails = useSelector(state => state.blogDetails);
    const blogPhoto = useSelector(state => state.blogPhoto);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlogPosts(page, id))
    }, [page])

    useEffect(() => {
        dispatch(getBlogDetails(id))
        dispatch(getBlogPhoto(id))
    }, [])

    const handlePageChange = (event, value) => {
        setPage(value);
      }

    return (
        <div className="blog-details-page">
            <div className='breadcrumb-wrapper'>
                <Breadcrumb 
                    previousName='Blogs'
                    previousLink='blogs'
                    current={id}
                />
            </div>
            <section id="blog_detils" className="mt-3">
                <div className="card text-center blog-info-card">
                    <div className="card-header blog-info-header">
                        <h1>
                            {blogDetails.name}
                        </h1>
                    </div>
                    <div className="card-body blog-info-body">
                        <div className="blog-info-subcard blog-info-photo"> 
                            {blogPhoto.loading ? (
                                <div className="loader">
                                    <ClipLoader color={LightBlue} loading={true} css={LoaderStyles} size={LoaderSize} />
                                </div> ) : ( null )}
                            {blogPhoto.error ? (
                                <div className="alerts">
                                    <Alerts 
                                        type="error"
                                        message={blogPhoto.error}
                                    />
                                </div> ) : ( null )}
                            {!blogPhoto.loading && !blogPhoto.error ? (
                                <div className="photo">
                                    <img src={protocol+"//"+hostname+":8000"+blogPhoto.photo} alt="img" className="img-thumbnail" />
                                </div> ) : ( null )}
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
                <div className="loader">
                    <ClipLoader color={LightBlue} loading={true} css={LoaderStyles} size={LoaderSize} />
                </div> ) : ( null )}
            {blogPosts.error ? (
                <div className="alerts">
                    <Alerts 
                        type="error"
                        message={blogPosts.error}
                    />
                </div> ) : ( null )}
            {!blogPosts.loading && !blogPosts.error ? (
                <section id="posts">
                    {blogPosts.data.map(blogPost => (
                        <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        />
                    ))}
                </section> ) : ( null )} 
            <div className='pagination'>
                <Pagination 
                    count={Math.floor(blogPosts.dataCount/BlogPostsPageSize)+1} 
                    variant="outlined" 
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default BlogDetailsPage;
