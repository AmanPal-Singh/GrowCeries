import React from 'react';
import './HomeMap.css';
import Navbar from '../Navbar/Navbar.js';

class HomeMap extends React.Component {
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
            YA BREAD
          </p>
        </div>
      </div>
    );
  }
}

export default HomeMap;