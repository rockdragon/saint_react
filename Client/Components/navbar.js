import React from 'react'
import { Link } from 'react-router'

var NavBar = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-default"
                         role="navigation">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to={`/`}>Home</Link>
                        </div>
                        <div className="collapse navbar-collapse"
                             id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to={`/messages`}>Messages</Link>
                                </li>
                                <li>
                                    <Link to={`/form`}>Form</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
});
export default NavBar;
