import React from 'react';
import logo from './logo.svg';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="Login-header">
          <p>
            Login
          </p>
          <input class="Login" type="text" placeholder="Email"></input>
          <input class="Login" type="text" placeholder="Password"></input>
          <button onClick={this.props.handleLoginClick}>Check My Bread</button>
        </header>
      </div>
    );
  }
}

export default Login;
