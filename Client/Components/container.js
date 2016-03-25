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
    createElement: function(component, props) {
        console.log(arguments)
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
        const {title, children, childrenProps} = this.props;
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
                        { React.cloneElement(children, childrenProps) }
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
    let childrenProps = {};
    if(pathname === '/form')
        childrenProps = {onMessageSubmit: this.handleMessageSubmit};
    else if(pathname === '/messages')
        childrenProps = {data: state.messages};
    return {
        childrenProps: childrenProps
    };
}
export default connect(mapStateToProps)(Container);

//export default Container;
//<MessageBoard url='/api/message' title='留言板'/>