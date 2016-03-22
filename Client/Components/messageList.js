import React from 'react'
var MessageList = React.createClass({
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextProps.data !== this.props.data;
    },
    render: function () {
        var messages = '';
        if(this.props.data && this.props.data.length > 0) {
            messages = this.props.data.map(function (message, index) {
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
        }
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
export default MessageList;
