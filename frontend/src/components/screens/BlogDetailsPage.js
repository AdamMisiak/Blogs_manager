import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { getBlogDetails } from '../../actions/BlogDetails';
import Blog from '../common/Blog';
import Showcase from '../layout/Showcase';
import Alerts from '../layout/Alerts';

const override = "display: block; margin: 0 auto;";

function BlogDetailsPage({ blogDetails, getBlogDetails }) {
    useEffect(() => {
        getBlogDetails()
    }, [])

    return blogDetails.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogDetails.error ? (
        <Alerts 
          type="error"
          message={blogDetails.error}
        />
    ) : (
        <div>
            TEST
            {blogDetails.blogDetails.map(blog => (
                <Blog
                    key={blog.id}
                    blog={blog}
                />
            ))}
        </div>
            );
}

const mapStateToProps = state => ({
    blogDetails: state.blogDetails
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogDetails: () => dispatch(getBlogDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);
