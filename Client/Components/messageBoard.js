var React = require('react');
var MessageList = require('./messageList');
var MessageForm = require('./messageForm');
var MessageBoard = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'get',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleMessageSubmit: function(message) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'post',
            data: message,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div id="messageBoard">
                <h1>Message Board</h1>
                <MessageList data={this.state.data} />
                <MessageForm onMessageSubmit={this.handleMessageSubmit} />
            </div>
        );
    }
});
module.exports = MessageBoard;