import React from 'react'
import ReactDOM from 'react-dom';
import {Button, Toast} from 'react-weui';

const Default = React.createClass({
    getInitialState: function(){
        return {
            show: false
        }
    },

    handleClick: function() {
        this.setState({show: true});
    },

    render: function() {
        return (<section>
            <Button onClick={this.handleClick.bind(this)}>显示toast</Button>
            <Toast show={this.state.show}>
                加载中...
            </Toast>
        </section>)
    },
})

export default Default;

