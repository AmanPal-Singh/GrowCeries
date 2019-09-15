import React from 'react';
import './Credits.css';
import Navbar from '../Navbar/Navbar.js';

class Credits extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CreditsContainer">
        <Navbar handleLogoutClick={this.props.handleLogoutClick}
          handleHomeMapClick={this.props.handleHomeMapClick}
          handleTimeInsightsClick={this.props.handleTimeInsightsClick}
          handleProdInsightsClick={this.props.handleProdInsightsClick}
          handleCreditsClick={this.props.handleCreditsClick}/>
          <p className="Credits">
            GrowCeries was made at Hack The North 2019, by the efforts of Skyla Thadani, Aman Singh, Vinojan Veluppilai, and Priya Jain.
            This is made with React, Firebase, and the Javascript Google Maps API.
          </p>
      </div>
    );
  }
}

export default Credits;