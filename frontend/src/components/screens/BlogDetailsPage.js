import Pagination from '@material-ui/lab/Pagination';
import emojiFlags from 'emoji-flags';
import Moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { getBlogDetails } from '../../actions/BlogDetails';
import { getBlogPhoto } from '../../actions/BlogPhotos';
import { getBlogPosts } from '../../actions/BlogPosts';
import { getSubscribedBlogs, postSubscribeBlog } from '../../actions/SubscribedBlogs';
import { LightBlue } from "../../constants/Colors";
import { LoaderSize, LoaderStyles } from "../../constants/Loader";
import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination";
import '../../styles/BlogDetails.css';
import BlogPost from '../common/BlogPost';
import Alerts from '../layout/Alerts';
import Breadcrumb from '../layout/Breadcrumb';


function BlogDetailsPage() {
    const { id } = useParams();
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;

    const [page, setPage] = useState(DefaultPage);
    const [subscribed, setSubscribed] = useState(false);

    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);
    const blogPosts = useSelector(state => state.blogPosts);
    const blogDetails = useSelector(state => state.blogDetails);
    const blogPhoto = useSelector(state => state.blogPhoto);
    const dispatch = useDispatch();
    
    // const user = auth.user.id

    useEffect(() => {
        dispatch(getBlogPosts({
            page: page,
            blogId: id
        }))
        if (auth.isAuthenticated) {
            dispatch(getSubscribedBlogs(auth.user.id))
        }
    }, [page])

    useEffect(() => {
        dispatch(getBlogDetails(id))
        dispatch(getBlogPhoto(id))
    }, [])

    useEffect(() => {
        subscribedBlogs.data.forEach(subscribedBlog => {
            if (id == subscribedBlog.id) {
                setSubscribed(true)
            }
        })
    }, [])

    const onClick = (e) => {
        e.preventDefault();
        dispatch(postSubscribeBlog(auth.user.id, id));
        setSubscribed(!subscribed)
    };

    const handlePageChange = (event, value) => {
        setPage(value);
      }

    if (!auth.isAuthenticated) return <Redirect to="/login" />

    return (
        <div className="blog-details-page">
            <div className='breadcrumb-wrapper'>
                <Breadcrumb 
                    previousName='Blogs'
                    previousLink='blogs'
                    current={id}
                />
            </div>
            <section id="blog-detils" className="mt-3">
                <div className="card blog-details">
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
                        <div className="card-button">
                            <button
                                className={subscribed ? 'button unsubscribe-button' : 'button subscribe-button'} 
                                onClick={onClick}>
                                {subscribed ? 'Unsubscribe' : 'Subscribe'}
                            </button>
                        </div>
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
                <section id="blog-posts">
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
