var React = require('react');
var MessageList = React.createClass({
    render: function () {
        var messages = this.props.data.map(function(message, index) {
            return (
                <li key={index}>
                    {message.name} said: {message.message}
                </li>
            );
        });
        return (
            <ul id="messageList">
                {messages}
            </ul>
        );
    }
});
module.exports = MessageList;
