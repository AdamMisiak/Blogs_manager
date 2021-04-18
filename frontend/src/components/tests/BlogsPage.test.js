import { mount } from 'enzyme';
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Root from '../../Root';
import Breadcrumb from '../layout/Breadcrumb';
import Filters from '../layout/Filters';
import Showcase from '../layout/Showcase';
import BlogsPage from '../screens/BlogsPage';
import BlogPost from '../common/BlogPost'
import Alerts from '../layout/Alerts';
import Pagination from '@material-ui/lab/Pagination';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <BlogsPage />
        </Root>
    );
});

it('Shows a breadcrumb component', () => {
    expect(wrapped.find(Breadcrumb).length).toEqual(1)
});

it('Shows a loader component', () => {
    expect(wrapped.find(ClipLoader).length).toEqual(1)
});

// it('Shows an alerts component', () => {
//     expect(wrapped.find(Alerts).length).toEqual(20)
// });

it('Shows a pagination component', () => {
    expect(wrapped.find(Pagination).length).toEqual(1)
});


