import React from 'react'
import { connect } from 'react-redux'
import MessageList from './messageList'
import MessageForm from './messageForm'
import {addMessage} from '../flux/actions'
var MessageBoard = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'get',
            cache: false,
            success: function (data) {
                //this.setState({data: messages});
                this.props.dispatch(addMessage(data));
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
                this.props.dispatch(addMessage(data));
                //this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        const {title, messages} = this.props;
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
                                        <h3>{title}</h3>
                                    </div>
                                </div>
                                <MessageList data={messages}/>
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
// mapStateToProps
function select(state) {
    return {
        messages: state.messages
    };
}
export default connect(select)(MessageBoard);