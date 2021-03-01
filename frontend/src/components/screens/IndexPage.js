import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';
import Showcase from '../layout/Showcase';

function IndexPage({ blogPosts, getBlogPosts }) {
    useEffect(() => {
        getBlogPosts()
    }, [])

    return blogPosts.loading ? (
        <h2>LOADING</h2>
    ) : blogPosts.error ? (
        <h2>
            {blogPosts.error}
        </h2>
    ) : (
                <div>
                    <Showcase />
                    {blogPosts.map(blogPost => (
                        <BlogPost
                            key={blogPost.id}
                            blogPost={blogPost}
                        />
                    ))}
                </div>
            );
}

const mapStateToProps = state => ({
    blogPosts: state.blogPosts.blogPosts
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogPosts: () => dispatch(getBlogPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
