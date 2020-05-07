import React, { Component } from 'react'

/**
 * Logs out the user and displays a simple log-out text.
 */
class LogoutComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h3>You are logged out</h3>;
    }
}

export default LogoutComponent;