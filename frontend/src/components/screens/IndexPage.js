import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBlogPosts } from '../../actions/BlogPosts';
import BlogPost from '../common/BlogPost';

export class IndexPage extends Component {

    componentDidMount() {
        this.props.getBlogPosts();
    };
    

    render() {
        return (
                <div>
                    {this.props.blog_posts.map(blogPost => (
                        <BlogPost
                            blogPost={blogPost}
                        />
                    ))}
                </div>
 
        
        );
    }
}

const mapStateToProps = state => ({
    blog_posts: state.blog_posts.blog_posts
});

export default connect(mapStateToProps, { getBlogPosts })(IndexPage);
