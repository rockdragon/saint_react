export const ADD_MESSAGE = 'ADD_MESSAGE';

// messages: [{name, message}]
export function addMessage(data) {
    return {
        type: ADD_MESSAGE,
        data
    };
}