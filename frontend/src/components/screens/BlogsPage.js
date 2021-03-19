import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { getBlogs } from '../../actions/Blogs';
import Blog from '../common/Blog';
import Breadcrumb from '../layout/Breadcrumb';
import Alerts from '../layout/Alerts';

const override = "display: block; margin: 0 auto;";

function BlogsPage({ blogs, getBlogs }) {
    var page = 1;

    useEffect(() => {
        getBlogs({
            page: page
        })
    }, [])
    console.log(blogs)

    return blogs.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogs.error ? (
        <Alerts 
          type="error"
          message={blogs.error}
        />
    ) : (
        <div>
            <Breadcrumb 
                current='Blogs'
            />
            {blogs.data.map(blog => (
                <Blog
                    key={blog.id}
                    blog={blog}
                />
            ))}
        </div>
            );
}

const mapStateToProps = state => ({
    blogs: state.blogs
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogs: ({page}) => dispatch(getBlogs(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage);
