import React from 'react';
import Login from './Login/Login.js';
import HomeMap from './HomeMap/HomeMap.js';
import TimeInsights from './TimeInsights/TimeInsights.js';
import ProdInsights from './ProdInsights/ProdInsights.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleHomeMapClick = this.handleHomeMapClick.bind(this);
    this.handleTimeInsightsClick = this.handleTimeInsightsClick.bind(this);
    this.handleProdInsightsClick = this.handleProdInsightsClick.bind(this);
    this.state = {screen: 'login'};
  }

  handleLoginClick() {
    this.setState({screen: 'homeMap'});
  }

  handleLogoutClick() {
    this.setState({screen: 'login'});
  }

  handleHomeMapClick() {
    this.setState({screen: 'homeMap'});
  }

  handleTimeInsightsClick() {
    this.setState({screen: 'timeInsights'});
  }

  handleProdInsightsClick() {
    this.setState({screen: 'prodInsights'});
  }

  render() {
    if (this.state.screen === 'login') {
      return (
        <Login handleLoginClick={this.handleLoginClick}
          handleHomeMapClick={this.handleHomeMapClick}
          handleTimeInsightsClick={this.handleTimeInsightsClick}
          handleProdInsightsClick={this.handleProdInsightsClick}/>
      );
    } else if (this.state.screen === 'homeMap') {
      return (
        <HomeMap handleLogoutClick={this.handleLogoutClick}
          handleHomeMapClick={this.handleHomeMapClick}
          handleTimeInsightsClick={this.handleTimeInsightsClick}
          handleProdInsightsClick={this.handleProdInsightsClick}/>
      )
    } else if (this.state.screen === 'timeInsights') {
      return (
        <TimeInsights handleLogoutClick={this.handleLogoutClick}
          handleHomeMapClick={this.handleHomeMapClick}
          handleTimeInsightsClick={this.handleTimeInsightsClick}
          handleProdInsightsClick={this.handleProdInsightsClick}/>
      )
    } else if (this.state.screen === 'prodInsights') {
      return (
        <ProdInsights handleLogoutClick={this.handleLogoutClick}
          handleHomeMapClick={this.handleHomeMapClick}
          handleTimeInsightsClick={this.handleTimeInsightsClick}
          handleProdInsightsClick={this.handleProdInsightsClick}/>
      )
    }
  }
}

export default App;
