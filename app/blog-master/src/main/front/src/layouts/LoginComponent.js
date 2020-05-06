import React, { Component, Fragment } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import Button from "@material-ui/core/Button";
import History from '../History';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                History.push('/');
            }).catch(() => {
                this.setState({ hasLoginFailed: true });
            });

        if (this.state.hasLoginFailed) {
            alert('Login failed.');
        } else {
            alert('Successfully logged in.');
        }
    }

    render() {
        return (
            <Fragment>
                <form id="loginForm">
                    <label htmlFor="username">Username</label><br />
                    <input name="username" type="text" style={{ width: '15%' }} maxLength="10"
                           value={this.state.username} onChange={this.handleChange.bind(this)} />

                    <br /><br />

                    <label htmlFor="password">Password</label><br />
                    <input name="password" type="password" style={{ width: '15%' }} maxLength="10"
                           value={this.state.password} onChange={this.handleChange.bind(this)} />

                    <br /><br />

                    <Button variant='contained' onClick={ this.loginClicked.bind(this) }>Login</Button>
                </form>
            </Fragment>
        )
    }
}

export default LoginComponent;