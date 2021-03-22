import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
// material ui zamienic

import Pagination from '@material-ui/lab/Pagination';

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

import "../../styles/Pagination.css";
import { LightBlue } from "../../constants/Colors"
import { BlogPostsPageSize, DefaultPage } from "../../constants/Pagination"

const override = "display: block; margin: 0 auto;";

function IndexPage({
    blogPosts,
    getBlogPosts
}) {
    
    const [page, setPage] = useState(DefaultPage);
    

    useEffect(() => {
        getBlogPosts({
            page: page,
        })
    }, [page])

    const handlePageChange = (event, value) => {
        setPage(value);
      }

    return (
    <div>
        {/* style do zmiany bo nazwa uzywana juz */}
        <div className='breadcrumb-wrapper'>
            <Breadcrumb 
                current='Latest'
            />
        </div>
        <div className='showcase'>
            <Showcase />
        </div>
        {blogPosts.loading ? (
            <div className='loader'>
                <ClipLoader color={LightBlue} loading={true} css={override} size={100} />
            </div> ) : ( null )}
        {blogPosts.error ? (
            <div className='alerts'>
                <Alerts 
                    type="error"
                    message={blogPosts.error}
                />
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
                count={Math.floor(blogPosts.dataCount/BlogPostsPageSize)} 
                variant="outlined" 
                onChange={handlePageChange}
                className="pagination"
            />
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: ({page}) => dispatch(getBlogPosts(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
