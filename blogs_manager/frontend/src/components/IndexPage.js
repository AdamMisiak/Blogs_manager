import React, { Component } from "react";
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
                    <Route path='/'>
                        TEST ROUTER!
                    </Route>
                    <Route path='/blogs' component={BlogsPage} />
                    <Route path='/account' component={AccountPage} />
                </Switch>
            </Router>
        )
    }
}