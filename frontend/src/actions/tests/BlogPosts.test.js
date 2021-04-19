import { 
    getBlogPostsRequest, 
    getBlogPostsSuccess, 
    getBlogPostsFailure 
} from "../BlogPosts";
import { 
    GET_BLOG_POSTS_REQUEST, 
    GET_BLOG_POSTS_SUCCESS,
    GET_BLOG_POSTS_FAILURE, 
} from '../Types';

describe('getBlogPostsRequest', () => {
    it('has the correct type', () => {
        const action = getBlogPostsRequest();

        expect(action.type).toEqual(GET_BLOG_POSTS_REQUEST)
    })
})

describe('getBlogPostsSuccess', () => {
    it('has the correct type', () => {
        const action = getBlogPostsSuccess();

        expect(action.type).toEqual(GET_BLOG_POSTS_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getBlogPostsSuccess('blogs details');

        expect(action.payload).toEqual('blogs details')
    })
})

describe('getBlogPostsFailure', () => {
    it('has the correct type', () => {
        const action = getBlogPostsFailure();

        expect(action.type).toEqual(GET_BLOG_POSTS_FAILURE)
    })
})