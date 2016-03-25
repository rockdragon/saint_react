import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from '../flux/reducers'
import Container from '../components/container'
import Default from '../components/default'
import MessageList from '../components/messageList'
import MessageForm from '../components/messageForm'

let store = createStore(reducers);
let rootElement = document.getElementById('container');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Container}>
                <IndexRoute component={Default} />
                <Route path="messages" component={MessageList} />
                <Route path="form" component={MessageForm} />
            </Route>
        </Router>
    </Provider>
    , rootElement
);