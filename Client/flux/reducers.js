import { combineReducers } from 'redux'
import { addMessage, ADD_MESSAGE } from './actions';

function messages(state={}, action) {
    console.log(action)
    switch(action.type){
        case ADD_MESSAGE:
            return action.data;
        default:
            return state;
    }
}

const messageApp = combineReducers({
    messages
});
export default messageApp;
