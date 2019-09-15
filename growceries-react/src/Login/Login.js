import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="Login-header">
          <p className="Title">
            GROWCERIES
          </p>
          <div className="Login-forms">
            <p>Login</p>
            <input className="Login" type="text" placeholder="Email"></input>
            <input className="Login" type="text" placeholder="Password"></input>
            <button onClick={this.props.handleLoginClick}>Check My Bread</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Login;
