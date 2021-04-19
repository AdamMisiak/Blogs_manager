import { 
    getBlogPhotoRequest, 
    getBlogPhotoSuccess, 
    getBlogPhotoFailure 
} from "../BlogPhotos";
import { 
    GET_BLOG_PHOTO_REQUEST, 
    GET_BLOG_PHOTO_SUCCESS, 
    GET_BLOG_PHOTO_FAILURE,
} from '../Types';

describe('getBlogPhotoRequest', () => {
    it('has the correct type', () => {
        const action = getBlogPhotoRequest();

        expect(action.type).toEqual(GET_BLOG_PHOTO_REQUEST)
    })
})

describe('getBlogPhotoSuccess', () => {
    it('has the correct type', () => {
        const action = getBlogPhotoSuccess();

        expect(action.type).toEqual(GET_BLOG_PHOTO_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getBlogPhotoSuccess('blogs details');

        expect(action.payload).toEqual('blogs details')
    })
})

describe('getBlogPhotoFailure', () => {
    it('has the correct type', () => {
        const action = getBlogPhotoFailure();

        expect(action.type).toEqual(GET_BLOG_PHOTO_FAILURE)
    })
})