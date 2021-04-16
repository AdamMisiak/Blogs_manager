import { shallow } from 'enzyme';
import React from 'react';
import { Route } from "react-router-dom";
import App from '../../App';
import PrivateRoute from "../common/PrivateRoute";
import Alerts from '../layout/Alerts';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import AboutPage from "../screens/AboutPage";
import BlogDetailsPage from '../screens/BlogDetailsPage';
import IndexPage from '../screens/IndexPage';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('Shows a header component', () => {
    expect(wrapped.find(Header).length).toEqual(1)
});

it('Shows a alerts component', () => {
    expect(wrapped.find(Alerts).length).toEqual(1)
});

it('Shows a route component', () => {
    expect(wrapped.find(Route).length).toEqual(5)
});

it('Shows a private route component', () => {
    expect(wrapped.find(PrivateRoute).length).toEqual(3)
});

it('Shows a index page component', () => {
    expect(wrapped.find(IndexPage).length).toEqual(1)
});

it('Shows a about page component', () => {
    expect(wrapped.find(AboutPage).length).toEqual(1)
});

it('Shows a blog details page component', () => {
    expect(wrapped.find(BlogDetailsPage).length).toEqual(1)
});

it('Shows a login page component', () => {
    expect(wrapped.find(LoginPage).length).toEqual(1)
});

it('Shows a register page component', () => {
    expect(wrapped.find(RegisterPage).length).toEqual(1)
});

it('Shows a footer component', () => {
    expect(wrapped.find(Footer).length).toEqual(1)
});

