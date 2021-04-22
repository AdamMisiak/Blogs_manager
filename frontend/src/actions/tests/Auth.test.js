import { 
    loadUser, 
    login, 
    register,
    logout,
    getUserRequest,
    getUserSuccess,
    getUserFailure,
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    logoutUserSuccess,
    logoutUserFailure
} from "../Auth";
import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE, 
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    GET_ERRORS 
} from '../Types';

describe('getUserRequest', () => {
    it('has the correct type', () => {
        const action = getUserRequest();

        expect(action.type).toEqual(GET_USER_REQUEST)
    })
})

describe('getUserSuccess', () => {
    it('has the correct type', () => {
        const action = getUserSuccess();

        expect(action.type).toEqual(GET_USER_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = getUserSuccess([{
            'date_joined': "2021-03-23T15:33:08.963804Z",
            'email': "test@test.com",
            'favourite_genre': "Financials",
            'first_name': "",
            'id': 11,
            'is_superuser': false,
            'last_name': "",
            'subscribing_number': 20,
            'username': "test",
        }]);
        expect(action.payload[0].id).toEqual(11)
        expect(action.payload[0].first_name).toEqual("")
        expect(action.payload[0].favourite_genre).toEqual("Financials")
        expect(action.payload[0].subscribing_number).toEqual(20)
        expect(action.payload[0].username).toEqual("test")
        expect(action.payload.length).toEqual(1)
    })
})

describe('getUserFailure', () => {
    it('has the correct type', () => {
        const action = getUserFailure();

        expect(action.type).toEqual(GET_USER_FAILURE)
    })
})