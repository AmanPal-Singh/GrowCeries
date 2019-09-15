import React from 'react';
import './ProdInsights.css';
import Navbar from '../Navbar/Navbar.js';

class ProdInsights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomeMapContainer">
        <Navbar handleLogoutClick={this.props.handleLogoutClick}
          handleHomeMapClick={this.props.handleHomeMapClick}
          handleTimeInsightsClick={this.props.handleTimeInsightsClick}
          handleProdInsightsClick={this.props.handleProdInsightsClick}
          handleCreditsClick={this.props.handleCreditsClick}/>
        <div className="HomeMap">
          <p>
            Prod insights
          </p>
        </div>
      </div>
    );
  }
}

export default ProdInsights;