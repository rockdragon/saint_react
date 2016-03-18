var React = require('react');
var MessageList = React.createClass({
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('[lifecycle]:', 'shouldComponentUpdate', [].slice.call(arguments));
        return nextProps.data !== this.props.data;
    },
    render: function () {
        var messages = this.props.data.map(function (message, index) {
            return (
                <li key={index}>
                    {message.name} said:
                    <blockquote>
                        <p>
                            {message.message}
                        </p>
                    </blockquote>
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
