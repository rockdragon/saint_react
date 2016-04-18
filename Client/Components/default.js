import React from 'react'
import { browserHistory } from 'react-router'

const Default = React.createClass({
    handleRedirect: function () {
        browserHistory.push('/form')
    },
    render: function () {
        return (
            <div>
                <quote>路由演示</quote>
                <br/>
                <input
                    type="button"
                    value="Redirect"
                    onClick={this.handleRedirect}
                />
            </div>
        );
    }
});
export default Default
