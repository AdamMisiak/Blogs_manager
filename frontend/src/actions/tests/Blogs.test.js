import { 
    getBlogsRequest, 
    getBlogsSuccess, 
    getBlogsFailure 
} from "../Blogs";
import { 
    GET_BLOGS_REQUEST, 
    GET_BLOGS_SUCCESS, 
    GET_BLOGS_FAILURE,
} from '../Types';

describe('getBlogsRequest', () => {
    it('has the correct type', () => {
        const action = getBlogsRequest();

        expect(action.type).toEqual(GET_BLOGS_REQUEST)
    })
})

describe('getBlogsSuccess', () => {
    it('has the correct type', () => {
        const action = getBlogsSuccess();

        expect(action.type).toEqual(GET_BLOGS_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getBlogsSuccess('blogs');

        expect(action.payload).toEqual('blogs')
    })
})

describe('getBlogsFailure', () => {
    it('has the correct type', () => {
        const action = getBlogsFailure();

        expect(action.type).toEqual(GET_BLOGS_FAILURE)
    })
})