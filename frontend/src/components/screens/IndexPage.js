import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';
import Showcase from '../layout/Showcase';

const override = "display: block; margin: 0 auto;";

function IndexPage({ blogPosts, getBlogPosts }) {
    useEffect(() => {
        getBlogPosts()
    }, [])

    return blogPosts.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogPosts.error ? (
        <h2>
            {blogPosts.error}
        </h2>
    ) : (
                <div>
                    <Showcase />
                    {blogPosts.blogPosts.map(blogPost => (
                        <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        />
                    ))}
                </div>
            );
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: () => dispatch(getBlogPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
