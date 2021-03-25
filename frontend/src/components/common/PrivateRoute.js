import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render = {props => {
            console.log(auth.loading, auth.isAuthenticated)
            if (auth.loading) {
                return <p>LOADING</p>;
            } else if (!auth.isAuthenticated) {
                return <Redirect to="/register" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRoute);