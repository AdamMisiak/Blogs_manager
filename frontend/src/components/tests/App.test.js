import { shallow } from 'enzyme';
import React from 'react';
import App from '../../App';
import Header from '../layout/Header';
import Alerts from '../layout/Alerts'



it('Shows a header component', () => {
    const wrapped = shallow(
        <App />
    );
    expect(wrapped.find(Header).length).toEqual(1)
});

it('Shows a alerts component', () => {
    const wrapped = shallow(
        <App />
    );
    expect(wrapped.find(Alerts).length).toEqual(1)
});