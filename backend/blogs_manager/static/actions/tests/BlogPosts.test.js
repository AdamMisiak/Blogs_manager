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
        const action = getBlogPostsSuccess([{
            "id": 589,
            "blog": {
                "id": 8,
                "name": "Just Geek It",
                "url": "https://geek.justjoin.it/",
                "author": "Just Join It",
                "genre": "IT",
                "genre2": "",
                "language": "Polish"
            },
            "name": "Kalendarz konferencji IT 2021 – gdzie warto wybrać się online w tym roku?",
            "url": "https://geek.justjoin.it/kalendarz-konferencje-it-2021",
            "date": "2021-04-16T00:00:00Z"
        }]);
        expect(action.payload[0].id).toEqual(589)
        expect(action.payload[0].blog.name).toEqual("Just Geek It")
        expect(action.payload[0].blog.genre).toEqual("IT")
        expect(action.payload[0].name).toEqual("Kalendarz konferencji IT 2021 – gdzie warto wybrać się online w tym roku?")
        expect(action.payload[0].date).toEqual("2021-04-16T00:00:00Z")
        expect(action.payload.length).toEqual(1)
    })
})

describe('getBlogPostsFailure', () => {
    it('has the correct type', () => {
        const action = getBlogPostsFailure();

        expect(action.type).toEqual(GET_BLOG_POSTS_FAILURE)
    })
})