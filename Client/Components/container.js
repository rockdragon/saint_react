import React from 'react'
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'

import {receiveMessages} from '../flux/actions'
import NavBar from '../components/navBar'

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
        const {title, messages, children, location} = this.props;
        var props = undefined;
        if(location.pathname === '/form')
            props = {onMessageSubmit: this.handleMessageSubmit};
        else if(location.pathname === '/messages')
            props = {data: messages};
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
                        {
                            props
                                ? React.cloneElement(children, props)
                                : children
                        }
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }
});

function select(state) {
    return {
        messages: state.messages
    };
}
export default connect(select)(Container);

//export default Container;
//<MessageBoard url='/api/message' title='留言板'/>