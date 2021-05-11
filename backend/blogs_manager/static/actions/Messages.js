import {
    CREATE_MESSAGE,
} from './Types'

export const createMessage = message => {
    return {
        type: CREATE_MESSAGE,
        payload: message
    };
};
