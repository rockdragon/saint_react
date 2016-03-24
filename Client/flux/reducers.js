import { combineReducers } from 'redux'
import { addMessage, ADD_MESSAGE } from './actions';

function messages(state={}, action) {
    switch(action.type){
        case ADD_MESSAGE:
            return action.data;
        default:
            return state;
    }
}

const reducers = combineReducers({
    messages
});
export default reducers;
