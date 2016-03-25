import { combineReducers } from 'redux'
import { ADD_MESSAGE } from './actions';
import { routerReducer } from 'react-router-redux'

function messages(state={}, action) {
    switch(action.type){
        case ADD_MESSAGE:
            return action.data;
        default:
            return state;
    }
}

const reducers = combineReducers({
    messages,
    routing: routerReducer
});
export default reducers;
