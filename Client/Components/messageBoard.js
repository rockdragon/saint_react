var React = require('react');
var MessageList = require('./messageList');
var MessageForm = require('./messageForm');
var MessageBoard = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'get',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleMessageSubmit: function (message) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'post',
            data: message,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4" id="messageBoard">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>{this.props.title}</h3>
                                    </div>
                                </div>
                                <MessageList data={this.state.data}/>
                                <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = MessageBoard;