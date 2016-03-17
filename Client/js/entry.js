var React = require('react');
var ReactDOM = require('react-dom');
var MessageBoard = require('../components/messageBoard');

ReactDOM.render(
    <MessageBoard url='/api/message' />,
    document.getElementById('container')
);