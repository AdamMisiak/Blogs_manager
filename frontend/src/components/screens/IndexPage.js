import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import Pagination from '@material-ui/lab/Pagination';

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

const override = "display: block; margin: 0 auto;";

function IndexPage({
    blogPosts,
    getBlogPosts
}) {
    var page = 1;

    useEffect(() => {
        getBlogPosts(page)
    }, [])

    return blogPosts.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogPosts.error ? (
        <h2>
            <Alerts 
              type="error"
              message={blogPosts.error}
            />
        </h2>
    ) : (
                <div>
                    <Breadcrumb 
                        current='Latest'
                    />
                    <Showcase />
                    {blogPosts.data.map(blogPost => (
                        <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        />
                    ))}
                    <Pagination 
                        count={3} 
                        variant="outlined" 
                    />
                </div>
            );
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
