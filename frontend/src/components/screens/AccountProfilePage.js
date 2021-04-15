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
import { DefaultPage } from "../../constants/Pagination";
import '../../styles/AccountProfileDetails.css';
import Alerts from '../layout/Alerts';
import Breadcrumb from '../layout/Breadcrumb';


function AccountProfilePage() {
    const { id } = useParams();

    const [page, setPage] = useState(DefaultPage);
    const [subscribed, setSubscribed] = useState(false);

    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);
    const blogDetails = useSelector(state => state.blogDetails);
    const dispatch = useDispatch();

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

    if (!auth.isAuthenticated) return <Redirect to="/login" />

    return (
        <div className="account-profile-details-page">
            <Breadcrumb 
                current='Profile'
            />  
            <div className="account-profile-details card">
                <div className="account-profile-details-header">
                    <h1>
                        {blogDetails.name}
                    </h1>
                </div>
                <div className="account-profile-details-body">
                    <div className="account-profile-details-text">
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
                    <div className="account-profile-details-stats">
                        Last post published: <b>{Moment(blogDetails.last_post_added).format('DD-MM-YYYY')}</b>
                        <hr className="mt-2 mb-2"/>
                        Published posts: <b>{blogDetails.blog_posts}</b>
                        <hr className="mt-2 mb-2"/>
                        Average posts per month: <b>{blogDetails.blog_post_avg}</b>
                        <hr className="mt-2 mb-2"/>
                        Subscribers: <b>{blogDetails.subscribers}</b>
                    </div>
                </div>
                <div className="account-profile-details-footer">
                    <div className="card-button">
                        <button
                            className={subscribed ? 'button unsubscribe-button' : 'button subscribe-button'} 
                            onClick={onClick}>
                            {subscribed ? 'Unsubscribe' : 'Subscribe'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountProfilePage;
