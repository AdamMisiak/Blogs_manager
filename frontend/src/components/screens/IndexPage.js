import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import Pagination from '@material-ui/lab/Pagination';

import { getBlogPosts } from '../../actions/BlogPosts';
import { getSubscribedBlogs } from '../../actions/SubscribedBlogs';

import BlogPost from '../common/BlogPost';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Filters from '../layout/Filters';

import "../../styles/Pagination.css";
import '../../styles/Filters.css';
import { LightBlue } from "../../constants/Colors"
import { LoaderStyles, LoaderSize } from "../../constants/Loader"
import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination"

function IndexPage() {
    const auth = useSelector(state => state.auth);
    const blogPosts = useSelector(state => state.blogPosts);
    const dispatch = useDispatch();
    const [page, setPage] = useState(DefaultPage);
    
    useEffect(() => {
        if (auth.user){
            dispatch(getSubscribedBlogs(auth.user.id))
        }
    }, [auth])

    useEffect(() => {
        dispatch(getBlogPosts(page))
    }, [page])

    const handlePageChange = (event, value) => {
        setPage(value);
      }

    return (
    <div className='index-page'>
        {/* style do zmiany bo nazwa uzywana juz */}
        <div className='breadcrumb-wrapper'>
            <Breadcrumb 
                current='Latest'
            />
        </div>
        <div className='showcase'>
            <Showcase />
        </div>
        <Filters />
        {blogPosts.loading ? (
            <div className='loader'>
                <ClipLoader color={LightBlue} loading={true} css={LoaderStyles} size={LoaderSize} />
            </div> ) : ( null )}
        {blogPosts.error ? (
            <div className='blogposts'>

            </div> ) : ( null )}
        {!blogPosts.loading && !blogPosts.error ? (
            <div className='blogposts'>
                {blogPosts.data.map(blogPost => (
                    <BlogPost
                        key={blogPost.id}
                        blogPost={blogPost}
                    />
                ))}
            </div> ) : ( null )}
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

export default IndexPage;
