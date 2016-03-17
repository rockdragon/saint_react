var React = require('react');
var MessageList = React.createClass({
    render: function () {
        var messages = this.props.data.map(function (message, index) {
            return (
                <li key={index}>
                    {message.name} said: {message.message}
                </li>
            );
        });
        return (
            <div className="row">
                <div className="col-md-12">
                    <ol id="messageList">
                        {messages}
                    </ol>
                </div>
            </div>
        );
    }
});
module.exports = MessageList;
