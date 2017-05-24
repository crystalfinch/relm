import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

// Components
import Listings from './Listings';
import Welcome from './Welcome';
import Chart from './Chart';

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard" className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h1>Dashboard</h1>
              <Welcome profile={this.props.profile} />
            </div>
            <div className="col-xs-6">
              <p className="pull-right cta-buttons">
                <Link to="/" className="btn btn-md btn-default">
                  <FontAwesome name='list' />
                  View Listings
                </Link>
                <Link to="/add-listing" className="btn btn-md btn-default">
                  <FontAwesome name='plus' />
                  Add Listing
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <hr />
            </div>
          </div>
          <div className="wrap row">
            <div className="col-xs-12 col-sm-12">
              <h2>Properties</h2>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <Chart items={this.props.items}/>
                </div>
                <div className="col-xs-12 col-sm-8">
                  <h3>Recent Listings</h3>
                  <Listings items={this.props.items} loggedIn={this.props.loggedIn} removeListing={this.props.removeListing}  setRecentlyViewed={this.props.setRecentlyViewed} />
                  <h3>Recent Sales</h3>
                  <Listings items={this.props.items} loggedIn={this.props.loggedIn} removeListing={this.props.removeListing}  setRecentlyViewed={this.props.setRecentlyViewed} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  profile: PropTypes.object,
  items: PropTypes.array,
  loggedIn: PropTypes.bool,
  removeListing: PropTypes.func,
  setRecentlyViewed: PropTypes.func
};

export default Dashboard;
