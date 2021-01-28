import React, { Component } from "react";
import { render } from "react-dom"

import IndexPage from "./IndexPage";
import Header from "./layout/Header"

import { Provider } from 'react-redux';
import store from '../store'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                </div>
            </Provider>

        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)