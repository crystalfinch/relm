import React, { Component, PropTypes } from 'react';

// Components
import Item from './Item';

class Listings extends Component {
  render() {
    const editable = this.props.loggedIn ? <th className="table-buttons" title="Edit"></th> : null;
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Location</th>
            <th>Beds/Baths</th>
            <th>Property Type</th>
            <th className="table-price">Price</th>
            {editable}
          </tr>
          {Object.keys(this.props.items).map(key => {
            return (
              <Item key={key}
                index={key}
                details={this.props.items[key]}
                loggedIn={this.props.loggedIn}
                removeListing={this.props.removeListing}
                setRecentlyViewed={this.props.setRecentlyViewed}
                />
            );
          })}
        </tbody>
      </table>
    );
  }
}

Listings.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  items: PropTypes.array,
  removeListing: PropTypes.func.isRequired,
  setRecentlyViewed: PropTypes.func.isRequired
};

export default Listings;
