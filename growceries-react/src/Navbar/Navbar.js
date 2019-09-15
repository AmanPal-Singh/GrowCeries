import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NavContainer">
        <div className="Features">
          <p className="navItem" onClick={this.props.handleHomeMapClick}>Map</p>
          <p className="navItem" onClick={this.props.handleTimeInsightsClick}>Time Insights</p>
          <p className="navItem" onClick={this.props.handleProdInsightsClick}>Product Insights</p>
        </div>
        <div className="Extras">
          <p className="navItem" onClick={this.props.handleLogoutClick}>Logout</p>
          <p className="navItem">Credits</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
