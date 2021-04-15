import Moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../styles/AccountProfileDetails.css';
import Breadcrumb from '../layout/Breadcrumb';


function AccountProfilePage() {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const auth = useSelector(state => state.auth);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    if (!auth.isAuthenticated) return <Redirect to="/login" />

    return (
        <div className="account-profile-details-page">
            <Breadcrumb 
                current='Profile'
            />  
            <div className="account-profile-details card">
                <div className="account-profile-details-header">
                    <h1>
                        {capitalizeFirstLetter(auth.user.username)}
                    </h1>
                </div>
                
                <div className="account-profile-details-body">
                    <div className="blog-details-photo"> 
                        <div className="photo">
                            <img src={protocol+"//"+hostname+":8000"+"/static/images/default-user-icon-4.jpeg"} alt="img" className="img-thumbnail" />
                        </div>
                    </div>
                    <div className="account-profile-details-text">
                        Email: <b>{auth.user.email}</b>
                        <hr className="mt-2 mb-2"/>
                        First name: <b>{auth.user.first_name}</b>
                        <hr className="mt-2 mb-2"/>
                        Last name: <b>{auth.user.last_name}</b>
                    </div>
                    <div className="account-profile-details-stats">
                        Joined: <b>{Moment(auth.user.date_joined).format('DD-MM-YYYY')}</b>
                        <hr className="mt-2 mb-2"/>
                        Subscribing blogs: <b>{auth.user.subscribing_number}</b>
                        <hr className="mt-2 mb-2"/>
                        Favourite genre: <b>{auth.user.favourite_genre}</b>
                    </div>
                </div>
                <div className="account-profile-details-footer">
                </div>
            </div>
        </div>
    )
}

export default AccountProfilePage;
