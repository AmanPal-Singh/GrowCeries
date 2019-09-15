import React from 'react';
import './TimeInsights.css';
import Navbar from '../Navbar/Navbar.js';

class TimeInsights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomeMapContainer">
        <Navbar handleLogoutClick={this.props.handleLogoutClick}
          handleHomeMapClick={this.props.handleHomeMapClick}
          handleTimeInsightsClick={this.props.handleTimeInsightsClick}
          handleProdInsightsClick={this.props.handleProdInsightsClick}/>
        <div className="HomeMap">
          <p>
            Time insights
          </p>
        </div>
      </div>
    );
  }
}

export default TimeInsights;