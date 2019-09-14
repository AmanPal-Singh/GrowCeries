import React from 'react';
import Login from './Login.js';
import HomeMap from './HomeMap.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {screen: 'login'};
  }

  handleLoginClick() {
    this.setState({screen: 'homeMap'});
  }

  render() {
    if (this.state.screen == 'login') {
      return (
        <Login handleLoginClick={this.handleLoginClick}/>
      );
    } else {
      return (
        <HomeMap/>
      )
    }
  }
}

export default App;
