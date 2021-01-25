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

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/test/blogs" component={BlogsPage} />
                    <Route path="/test/account" component={AccountPage} />
                    <Route path="/test/">
                        TEST ROUTER!
                    </Route>
                </Switch>
            </Router>
        )
    }
}