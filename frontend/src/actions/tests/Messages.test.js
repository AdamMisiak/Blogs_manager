import { 
    createMessage, 
} from "../Messages";
import { 
    CREATE_MESSAGE, 
} from '../Types';


describe('createMessage', () => {
    it('has the correct type', () => {
        const action = createMessage();

        expect(action.type).toEqual(CREATE_MESSAGE)
    })

    it('has the correct payload', () => {
        const action = createMessage(
            {
                emailSetting: "instant",
            }
        );
        expect(action.payload.emailSetting).toEqual("instant")
    })
})
