import React, { Component } from "react";
import { render } from "react-dom"

import IndexPage from "./IndexPage";
import AccountPage from "./AccountPage";
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
                    <AccountPage />
                </div>
            </Provider>

        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)