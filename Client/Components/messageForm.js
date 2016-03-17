var React = require('react');
var MessageForm = React.createClass({
    getInitialState: function () {
        return {name: '', message: ''};
    },
    handleNameChange: function (e) {
        this.setState({name: e.target.value})
    },
    handleMessageChange: function (e) {
        this.setState({message: e.target.value})
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var message = this.state.message.trim();
        if (!name || !message) {
            return;
        }
        //reversed delivery
        this.props.onMessageSubmit({name: name, message: message});
        this.setState({name: '', message: ''});
    },
    componentDidMount: function () {

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
                                        value={this.state.name}
                                        onChange={this.handleNameChange}
                                        id="textName"
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
                                        value={this.state.message}
                                        onChange={this.handleMessageChange}
                                        id="textMessage"
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
module.exports = MessageForm;
