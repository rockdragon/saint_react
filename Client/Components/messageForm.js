import React from 'react'
import { findDOMNode } from 'react-dom'

var MessageForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        const inputName = findDOMNode(this.refs.inputName);
        const inputMessage = findDOMNode(this.refs.inputMessage);
        var name = inputName.value.trim();
        var message = inputMessage.value.trim();
        if (!name || !message) {
            return;
        }
        //reversed delivery
        this.props.onMessageSubmit({name: name, message: message});
        inputName.value = '';
        inputMessage.value = '';
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="messageForm"
                          onSubmit={this.handleSubmit}
                          role="form">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3">
                                    <label>
                                        Name
                                    </label>
                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        ref="inputName"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3">
                                    <label>
                                        Message
                                    </label>
                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        placeholder="Say something..."
                                        ref="inputMessage"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3">
                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="submit"
                                        className="btn btn-default"
                                        value="Leave a message"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});
export default MessageForm;
