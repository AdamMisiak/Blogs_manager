import React, { Component } from "react";
import { render } from "react-dom"
import { Provider } from 'react-redux';
import store from '../store'

import Header from "./layout/Header";
import Breadcrumb from "./layout/Breadcrumb";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>

            <Header />
            <Breadcrumb />

            </Provider>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)