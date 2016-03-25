import React from 'react'
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'

import {receiveMessages} from '../flux/actions'
import NavBar from '../components/navBar'
import MessageList from '../components/messageList'
import MessageForm from '../components/messageForm'
import Default from '../components/default'

const Container = React.createClass({
    getDefaultProps: function () {
        return {
            url: '/api/message',
            title: '留言板'
        }
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            method: 'get',
            cache: false,
            success: function (data) {
                this.props.dispatch(receiveMessages(data));
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
                this.props.dispatch(receiveMessages(data));
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        const {title, children, messages, pathname} = this.props;
        var Child = Default, Props;
        if(pathname === '/messages') {
            Child = MessageList;
            Props = {data: messages};
        } else if(pathname === '/form'){
            Child = MessageForm;
            Props = {onMessageSubmit: this.handleMessageSubmit};
        }

        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4" id="messageBoard">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>{title}</h3>
                            </div>
                        </div>
                        <div className="row mt10"></div>
                        <Child {...Props} />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state, ownProps) {
    let pathname = ownProps.location.pathname;
    return {
        messages: state.messages,
        pathname
    };
}
export default connect(mapStateToProps)(Container);

//export default Container;
//<MessageBoard url='/api/message' title='留言板'/>