import React, { Component } from 'react';
import BlogsPage from "./BlogsPage";
import AccountPage from './AccountPage'
import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link, 
    Redirect
} from "react-router-dom"

function IndexPage(){
    return (
        <Router>
            <Switch>
                <Route path="/blogs" component={BlogsPage} />
                <Route path="/account" component={AccountPage} />
                <Route path="/">
                    TEST ROUTER!
                </Route>
            </Switch>
        </Router>
    )
}


export default IndexPage;