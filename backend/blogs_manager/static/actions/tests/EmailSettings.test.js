import { 
    postEmailSettingRequest, 
    postEmailSettingSuccess, 
    postEmailSettingFailure 
} from "../EmailSetting";
import { 
    POST_EMAIL_SETTING_REQUEST, 
    POST_EMAIL_SETTING_SUCCESS,
    POST_EMAIL_SETTING_FAILURE, 
} from '../Types';


describe('postEmailSettingRequest', () => {
    it('has the correct type', () => {
        const action = postEmailSettingRequest();

        expect(action.type).toEqual(POST_EMAIL_SETTING_REQUEST)
    })
})

describe('postEmailSettingSuccess', () => {
    it('has the correct type', () => {
        const action = postEmailSettingSuccess();

        expect(action.type).toEqual(POST_EMAIL_SETTING_SUCCESS)
    })

    it('has the correct payload', () => {
        const action = postEmailSettingSuccess(
            {
                status: "instant",
                user: 11
            }
        );
        expect(action.payload.status).toEqual("instant")
        expect(action.payload.user).toEqual(11)
    })
})

describe('postEmailSettingFailure', () => {
    it('has the correct type', () => {
        const action = postEmailSettingFailure();

        expect(action.type).toEqual(POST_EMAIL_SETTING_FAILURE)
    })
})