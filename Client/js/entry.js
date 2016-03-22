import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from '../components/messageBoard'
import messageApp from '../flux/reducers'

let store = createStore(messageApp);
let rootElement = document.getElementById('container');

render(
    <Provider store={store}>
        <App url='/api/message' title='留言板'/>
    </Provider>
    , rootElement
);