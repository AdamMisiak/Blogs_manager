import { 
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
        const action = getUserSuccess([
            {
                'date_joined': "2021-03-23T15:33:08.963804Z",
                'email': "test@test.com",
                'favourite_genre': "Financials",
                'first_name': "",
                'id': 11,
                'is_superuser': false,
                'last_name': "",
                'subscribing_number': 20,
                'username': "test",
            }
        ]);
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

describe('loginUserSuccess', () => {
    it('has the correct type', () => {
        const action = loginUserSuccess();

        expect(action.type).toEqual(LOGIN_USER_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = loginUserSuccess(
            {
                token: "92e569f4ebbf2b1b64def38f572cdde8abd0b29cb289b7844bff10d9f17c6a6f",
                user: {
                    email: "test@test.com",
                    id: 11,
                    username: "test",
                }
            }
        );
        expect(action.payload.user.id).toEqual(11)
        expect(action.payload.user.email).toEqual("test@test.com")
        expect(action.payload.user.username).toEqual("test")
        expect(action.payload.token).toEqual("92e569f4ebbf2b1b64def38f572cdde8abd0b29cb289b7844bff10d9f17c6a6f")
    })
})

describe('loginUserFailure', () => {
    it('has the correct type', () => {
        const action = loginUserFailure();

        expect(action.type).toEqual(LOGIN_USER_FAILURE)
    })

    it('has the correct payload', () => {
        const action = loginUserFailure(
            {
                non_field_errors: ["Incorrect Crudentials"]
            }
        );
        expect(action.payload.non_field_errors.length).toEqual(1)
        expect(action.payload.non_field_errors[0]).toEqual("Incorrect Crudentials")
    })
})

describe('registerUserSuccess', () => {
    it('has the correct type', () => {
        const action = registerUserSuccess();

        expect(action.type).toEqual(REGISTER_USER_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = registerUserSuccess(
            {
                token: "92e569f4ebbf2b1b64def38f572cdde8abd0b29cb289b7844bff10d9f17c6a6f",
                user: {
                    email: "test@test.com",
                    id: 11,
                    username: "test",
                }
            }
        );
        expect(action.payload.user.id).toEqual(11)
        expect(action.payload.user.email).toEqual("test@test.com")
        expect(action.payload.user.username).toEqual("test")
        expect(action.payload.token).toEqual("92e569f4ebbf2b1b64def38f572cdde8abd0b29cb289b7844bff10d9f17c6a6f")
    })
})

describe('registerUserFailure', () => {
    it('has the correct type', () => {
        const action = registerUserFailure();

        expect(action.type).toEqual(REGISTER_USER_FAILURE)
    })

    it('has the correct payload', () => {
        const action = registerUserFailure(
            {
                username: ["A user with that username already exists."]
            }
        );
        expect(action.payload.username.length).toEqual(1)
        expect(action.payload.username[0]).toEqual("A user with that username already exists.")
    })
})

describe('logoutUserSuccess', () => {
    it('has the correct type', () => {
        const action = logoutUserSuccess();

        expect(action.type).toEqual(LOGOUT_USER_SUCCESS)
    })
})

describe('logoutUserFailure', () => {
    it('has the correct type', () => {
        const action = logoutUserFailure();

        expect(action.type).toEqual(LOGOUT_USER_FAILURE)
    })
})