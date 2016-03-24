export const ADD_MESSAGE = 'ADD_MESSAGE';

// messages: [{name, message}]
export function receiveMessages(data) {
    return {
        type: ADD_MESSAGE,
        data
    };
}