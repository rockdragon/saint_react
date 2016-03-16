var React = require('react');
var ReactDOM = require('react-dom');
var Bitch = require('./bitch');
var CommentBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            method: 'post',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a {this.props.name}.
                <Bitch data={this.state.data} />
            </div>
        );
    }
});
module.exports.render = function(dom, name, url) {
    ReactDOM.render(
        <CommentBox name={name} url={url} />,
        dom
    );
};