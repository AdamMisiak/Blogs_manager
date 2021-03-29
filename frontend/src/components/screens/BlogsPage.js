import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from '@material-ui/lab/Pagination';

import { getBlogs } from '../../actions/Blogs';

import Blog from '../common/Blog';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

import { LightBlue } from "../../constants/Colors"
import { LoaderStyles, LoaderSize } from "../../constants/Loader"
import { BlogsPageSize, DefaultPage } from "../../constants/Pagination"

function BlogsPage() {
    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch();
    const [page, setPage] = useState(DefaultPage);

    useEffect(() => {
        dispatch(getBlogs(page))
    }, [page])

    const handlePageChange = (event, value) => {
        setPage(value);
    }

    return (
        <div className='blogs-page'>
        {/* style do zmiany bo nazwa uzywana juz */}
        <div className='breadcrumb-wrapper'>
            <Breadcrumb 
                current='Blogs'
            />
        </div>
        <div className='showcase'>
            <Showcase />
        </div>
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
