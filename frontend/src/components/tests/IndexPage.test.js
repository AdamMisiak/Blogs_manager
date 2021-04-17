import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import store from '../../store';
import Breadcrumb from '../layout/Breadcrumb';
import Filters from '../layout/Filters';
import Showcase from '../layout/Showcase';
import IndexPage from '../screens/IndexPage';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <BrowserRouter>
            <Provider store={store}>
                <IndexPage />
            </Provider>
        </BrowserRouter>
        
    );
});


it('Shows a showcase component', () => {
    expect(wrapped.find(Showcase).length).toEqual(1)
});

it('Shows a breadcrumb component', () => {
    expect(wrapped.find(Breadcrumb).length).toEqual(1)
});

it('Shows a filters component', () => {
    expect(wrapped.find(Filters).length).toEqual(1)
});

it('Shows a loader component', () => {
    expect(wrapped.find(ClipLoader).length).toEqual(1)
});




