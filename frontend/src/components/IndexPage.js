import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBlogPosts } from '../actions/BlogPosts';

export class IndexPage extends Component {

    componentDidMount() {
        this.props.getBlogPosts();
    };
    

    render() {
        return (
                <div>
                    {this.props.blog_posts.map(blog_post => (
                        <p key={blog_post.id}>
                            
                            { blog_post.name}
                        </p>
                    ))}
                </div>
 
        
        );
    }
}

const mapStateToProps = state => ({
    blog_posts: state.blog_posts.blog_posts
});

export default connect(mapStateToProps, { getBlogPosts })(IndexPage);
