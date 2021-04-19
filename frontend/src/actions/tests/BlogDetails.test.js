import { 
    getBlogDetailsRequest, 
    getBlogDetailsSuccess, 
    getBlogDetailsFailure 
} from "../BlogDetails";
import { 
    GET_BLOG_DETAILS_REQUEST, 
    GET_BLOG_DETAILS_SUCCESS, 
    GET_BLOG_DETAILS_FAILURE,
} from '../Types';

describe('getBlogDetailsRequest', () => {
    it('has the correct type', () => {
        const action = getBlogDetailsRequest();

        expect(action.type).toEqual(GET_BLOG_DETAILS_REQUEST)
    })
})

describe('getBlogDetailsSuccess', () => {
    it('has the correct type', () => {
        const action = getBlogDetailsSuccess();

        expect(action.type).toEqual(GET_BLOG_DETAILS_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getBlogDetailsSuccess('blogs details');

        expect(action.payload).toEqual('blogs details')
    })
})

describe('getBlogDetailsFailure', () => {
    it('has the correct type', () => {
        const action = getBlogDetailsFailure();

        expect(action.type).toEqual(GET_BLOG_DETAILS_FAILURE)
    })
})