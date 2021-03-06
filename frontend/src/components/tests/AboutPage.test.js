import { mount } from 'enzyme';
import React from 'react';
import Root from '../../Root';
import Breadcrumb from '../layout/Breadcrumb';
import Showcase from '../layout/Showcase';
import AboutPage from '../screens/AboutPage';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <AboutPage />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('Shows a showcase component', () => {
    expect(wrapped.find(Showcase).length).toEqual(1)
});

it('Shows a breadcrumb component', () => {
    expect(wrapped.find(Breadcrumb).length).toEqual(1)
});






