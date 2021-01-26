import React, { Component } from "react";
import { render } from "react-dom"
import IndexPage from "./IndexPage";
import Header from "./layout/Header"

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)