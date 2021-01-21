import React, { Component } from "react";
import { render } from "react-dom"
import IndexPage from './IndexPage'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>
            <Index />
        </h1>
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)