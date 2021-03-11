import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import { getBlogDetails } from '../../actions/BlogDetails';
import Blog from '../common/Blog';
import Breadcrumb from '../layout/Breadcrumb';
import Alerts from '../layout/Alerts';

const override = "display: block; margin: 0 auto;";

function BlogDetailsPage({ blogDetails, getBlogDetails }) {
    useEffect(() => {
        getBlogDetails()
    }, [])

    const location = useLocation();
    const currentId = location.pathname.split("/")[2];

    return blogDetails.loading ? (
        <div>
            <ClipLoader color="rgba(55, 113, 189, 0.9)" loading={true} css={override} size={100} />
        </div>
    ) : blogDetails.error ? (
        <div>
            <Breadcrumb 
                previous='Blogs'
                current={currentId}
            />
            <Alerts 
                type="error"
                message={blogDetails.error}
            />
        </div> 
    ) : (
        <div>
            TEST
        </div>
            );
}

const mapStateToProps = state => ({
    blogDetails: state.blogDetails
});

const mapDispatchToProps = dispatch => {
    return {
        getBlogDetails: () => dispatch(getBlogDetails(), )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);