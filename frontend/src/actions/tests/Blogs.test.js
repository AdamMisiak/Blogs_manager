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
        const action = getBlogsSuccess([
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

describe('getBlogsFailure', () => {
    it('has the correct type', () => {
        const action = getBlogsFailure();

        expect(action.type).toEqual(GET_BLOGS_FAILURE)
    })
})