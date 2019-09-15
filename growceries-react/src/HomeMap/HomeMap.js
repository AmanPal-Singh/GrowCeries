import React from 'react';
import './HomeMap.css';
import Navbar from '../Navbar/Navbar.js';

class HomeMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomeMapContainer" id="homeMap">
        <Navbar handleLogoutClick={this.props.handleLogoutClick}
          handleHomeMapClick={this.props.handleHomeMapClick}
          handleTimeInsightsClick={this.props.handleTimeInsightsClick}
          handleProdInsightsClick={this.props.handleProdInsightsClick}
          handleCreditsClick={this.props.handleCreditsClick}/>
        <div className="HomeMap">
          <a href="https://spriyajain.github.io/tracking-api/" target="_none">
            Map Of Current Carts
          </a>
        </div>
      </div>
    );
  }
}

export default HomeMap;