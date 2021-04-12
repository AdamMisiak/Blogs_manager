import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { getBlogs } from '../../actions/Blogs';
import { getSubscribedBlogs } from '../../actions/SubscribedBlogs';
import { LightBlue } from "../../constants/Colors";
import { LoaderSize, LoaderStyles } from "../../constants/Loader";
import { BlogsPageSize, DefaultPage } from "../../constants/Pagination";
import Blog from '../common/Blog';
import Alerts from '../layout/Alerts';
import Breadcrumb from '../layout/Breadcrumb';


function BlogsPage() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const blogs = useSelector(state => state.blogs);
    const [page, setPage] = useState(DefaultPage);

    useEffect(() => {
        dispatch(getBlogs(page))
        if (auth.isAuthenticated) {
            dispatch(getSubscribedBlogs(auth.user.id))
        }
    }, [page])

    const handlePageChange = value => setPage(value);

    if (!auth.isAuthenticated) return <Redirect to="/login" />

    return (
        <div className='blogs-page'>
            <Breadcrumb 
                current='Blogs'
            />
            {blogs.loading ? (
                <div className='loader'>
                    <ClipLoader color={LightBlue} loading={true} css={LoaderStyles} size={LoaderSize} />
                </div> ) : ( null )}
            {blogs.error ? (
                <div className='alerts'>
                    <Alerts 
                        type="error"
                        message={blogs.error}
                    />
                </div> ) : ( null )}
            {!blogs.loading && !blogs.error ? (
                <div className='blogs'>
                    {blogs.data.map(blog => (
                        <Blog
                            key={blog.id}
                            blog={blog}
                        />
                    ))}
                </div> ) : ( null )}
            <div className='pagination'>
                <Pagination 
                    count={Math.floor(blogs.dataCount/BlogsPageSize)+1} 
                    variant="outlined" 
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )

}

export default BlogsPage;
