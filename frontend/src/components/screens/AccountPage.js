import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from '@material-ui/lab/Pagination';

import { getSubscribedBlogs } from '../../actions/SubscribedBlogs';

import Blog from '../common/Blog';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

import { LightBlue } from "../../constants/Colors"
import { LoaderStyles, LoaderSize } from "../../constants/Loader"
import { BlogsPageSize, DefaultPage } from "../../constants/Pagination"

function AccountPage(){
    const auth = useSelector(state => state.auth);
    const subscribedBlogs = useSelector(state => state.subscribedBlogs);
    const dispatch = useDispatch();
    const [page, setPage] = useState(DefaultPage);

    const user = auth.user.id

    useEffect(() => {
        dispatch(getSubscribedBlogs(user))
    }, [])

    const handlePageChange = (event, value) => {
        setPage(value);
    }
    
    return (
        <div className='blogs-page'>
            {/* style do zmiany bo nazwa uzywana juz */}
            <div className='breadcrumb-wrapper'>
                <Breadcrumb 
                    current='Account'
                />
            </div>
            {subscribedBlogs.loading ? (
                <div className='loader'>
                    <ClipLoader color={LightBlue} loading={true} css={LoaderStyles} size={LoaderSize} />
                </div> ) : ( null )}
            {subscribedBlogs.error ? (
                <div className='alerts'>
                    <Alerts 
                        type="error"
                        message={subscribedBlogs.error}
                    />
                </div> ) : ( null )}
            {!subscribedBlogs.loading && !subscribedBlogs.error ? (
                <div className='blogs'>
                    {subscribedBlogs.data.map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                        />
                    ))}
                </div> ) : ( null )}
            <div className='pagination'>
                <Pagination 
                    count={Math.floor(subscribedBlogs.dataCount/BlogsPageSize)+1} 
                    variant="outlined" 
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default AccountPage;