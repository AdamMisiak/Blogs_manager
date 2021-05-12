import { 
    getSubscribedBlogsRequest, 
    getSubscribedBlogsSuccess,
    getSubscribedBlogsFailure,
    postSubscribeBlogRequest,
    postSubscribeBlogSuccess,
    postSubscribeBlogFailure
} from "../SubscribedBlogs";
import { 
    GET_SUBSCRIBED_BLOGS_REQUEST, 
    GET_SUBSCRIBED_BLOGS_SUCCESS,
    GET_SUBSCRIBED_BLOGS_FAILURE,
    POST_SUBSCRIBE_BLOG_REQUEST,
    POST_SUBSCRIBE_BLOG_SUCCESS,
    POST_SUBSCRIBE_BLOG_FAILURE
} from '../Types';

describe('getSubscribedBlogsRequest', () => {
    it('has the correct type', () => {
        const action = getSubscribedBlogsRequest();

        expect(action.type).toEqual(GET_SUBSCRIBED_BLOGS_REQUEST)
    })
})

describe('getSubscribedBlogsSuccess', () => {
    it('has the correct type', () => {
        const action = getSubscribedBlogsSuccess();

        expect(action.type).toEqual(GET_SUBSCRIBED_BLOGS_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getSubscribedBlogsSuccess([
            {
                author: "Tomasz Trela",
                genre: "Financials",
                genre2: "",
                id: 1,
                language: "Polish",
                name: "Trading for a living",
                url: "https://www.tradingforaliving.pl/",
            }
        ]);

        expect(action.payload[0].id).toEqual(1)
        expect(action.payload[0].author).toEqual("Tomasz Trela")
        expect(action.payload[0].genre).toEqual("Financials")
        expect(action.payload[0].language).toEqual("Polish")
        expect(action.payload[0].url).toEqual("https://www.tradingforaliving.pl/")
        expect(action.payload.length).toEqual(1)
    })
})

describe('getSubscribedBlogsFailure', () => {
    it('has the correct type', () => {
        const action = getSubscribedBlogsFailure();

        expect(action.type).toEqual(GET_SUBSCRIBED_BLOGS_FAILURE)
    })
})

describe('postSubscribeBlogRequest', () => {
    it('has the correct type', () => {
        const action = postSubscribeBlogRequest();

        expect(action.type).toEqual(POST_SUBSCRIBE_BLOG_REQUEST)
    })
})

describe('postSubscribeBlogSuccess', () => {
    it('has the correct type', () => {
        const action = postSubscribeBlogSuccess();

        expect(action.type).toEqual(POST_SUBSCRIBE_BLOG_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = postSubscribeBlogSuccess(
            {
                blog: "4",
                status: "unsubscribed",
                user: 11
            }
        );

        expect(action.payload.blog).toEqual("4")
        expect(action.payload.status).toEqual("unsubscribed")
        expect(action.payload.user).toEqual(11)
    })
})

describe('postSubscribeBlogFailure', () => {
    it('has the correct type', () => {
        const action = postSubscribeBlogFailure();

        expect(action.type).toEqual(POST_SUBSCRIBE_BLOG_FAILURE)
    })
})