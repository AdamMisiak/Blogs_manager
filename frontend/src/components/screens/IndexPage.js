import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
// material ui


import Pagination from '@material-ui/lab/Pagination';

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

import "../../styles/Pagination.css";

const override = "display: block; margin: 0 auto;";

function IndexPage({
    blogPosts,
    getBlogPosts
}) {
    const [page, setPage] = useState(1);

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
                <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
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
                count={Math.floor(blogPosts.dataCount/20)} 
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
