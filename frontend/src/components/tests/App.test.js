// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import Header from '../layout/Header';

it('Shows a header component', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(Header).length).toEqual(1)

});