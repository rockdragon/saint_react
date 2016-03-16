var React = require('react');
var ReactDOM = require('react-dom');
var Bitch = require('./bitch');
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a {this.props.name}.
                <Bitch />
            </div>
        );
    }
});
module.exports.render = function(dom, name) {
    ReactDOM.render(
        <CommentBox name={name} />,
        dom
    );
};