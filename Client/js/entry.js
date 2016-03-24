import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from '../flux/reducers'
import Container from '../components/container'
import Default from '../components/default'
import MessageList from '../components/messageList'
import MessageForm from '../components/messageForm'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

let store = createStore(reducers);
let rootElement = document.getElementById('container');


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Container}>
                <IndexRoute component={Default} />
                <Route path="messages" component={MessageList} />
                <Route path="form" component={MessageForm} />
            </Route>
        </Router>
    </Provider>
    , rootElement
);