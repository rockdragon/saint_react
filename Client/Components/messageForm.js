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
        this.setState({name:'', message:''});
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <form className="messageForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <br/>
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                />
                <br/>
                <input type="submit" value="Leave a message"/>
            </form>
        );
    }
});
module.exports = MessageForm;
