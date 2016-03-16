var React = require('react');
var Bitch = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment, index) {
            return (
                <div author={comment.author} key={index}>
                    {comment.text}
                </div>
            );
        });

        return (
            <div className="bitchyRiding">
                {commentNodes}
            </div>
        );
    }
});
module.exports = Bitch;