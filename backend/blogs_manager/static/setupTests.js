// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from "react";

// ADDED TO DELETE ERROR IN TESTS 
// "Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format.
// This will lead to a mismatch between the initial, non-hydrated UI and the intended UI.
// To avoid this, useLayoutEffect should only be used in components that render exclusively on the client.
// See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
React.useLayoutEffect = React.useEffect 
Enzyme.configure({ adapter: new Adapter() });
