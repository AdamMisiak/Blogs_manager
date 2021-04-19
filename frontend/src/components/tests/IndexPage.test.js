import { mount, shallow } from 'enzyme';
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Root from '../../Root';
import Breadcrumb from '../layout/Breadcrumb';
import Filters from '../layout/Filters';
import Showcase from '../layout/Showcase';
import IndexPage from '../screens/IndexPage';
import BlogPost from '../common/BlogPost'
import Alerts from '../layout/Alerts';
import Pagination from '@material-ui/lab/Pagination';

let wrapped;

// describe('IndexPage shallow', () => {
//     beforeEach(() => {
//         const initialState = {
//             blogPosts: {
//                 data: [{
//                         "id": 589,
//                         "blog": {
//                             "id": 8,
//                             "name": "Just Geek It",
//                             "url": "https://geek.justjoin.it/",
//                             "author": "Just Join It",
//                             "genre": "IT",
//                             "genre2": "",
//                             "language": "Polish"
//                         },
//                         "name": "Kalendarz konferencji IT 2021 – gdzie warto wybrać się online w tym roku?",
//                         "url": "https://geek.justjoin.it/kalendarz-konferencje-it-2021",
//                         "date": "2021-04-16T00:00:00Z"
//                     }]
//             }
//         }


//         wrapped = shallow(
//             <Root initialState={initialState}>
//                 <IndexPage />
//             </Root>
//         );
//     });

//     it('Shows a blog posts component', () => {
//         console.log(wrapped.debug(), wrapped.find(IndexPage))
//         expect(wrapped.find(BlogPost).length).toEqual(1)
//     });

// });

describe('IndexPage mount', () => {
    beforeEach(() => {
        wrapped = mount(
            <Root>
                <IndexPage />
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
    
    it('Shows a filters component', () => {
        expect(wrapped.find(Filters).length).toEqual(1)
    });

    it('Shows a loader component', () => {
        expect(wrapped.find(ClipLoader).length).toEqual(1)
    });

    it('Shows a pagination component', () => {
        expect(wrapped.find(Pagination).length).toEqual(1)
    });
});


