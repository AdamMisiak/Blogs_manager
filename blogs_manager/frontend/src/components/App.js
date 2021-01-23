import React, { Component } from "react";
import { render } from "react-dom"
import AccountPage from "./AccountPage";
import BlogsPage from "./BlogsPage";
import IndexPage from './IndexPage'


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <AccountPage />
            <IndexPage />
            <BlogsPage />
        </div>
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)