import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class RecentlyViewed extends Component {
  constructor() {
    super();
    this.renderViewedItems = this.renderViewedItems.bind(this);
  }
  renderViewedItems(viewedItems, listings) {
    if(viewedItems.length !== 0) {
      const listItems = viewedItems.map(item => {
        //const index = item - 1;
        const detailLink = `/detail?id=${item}`;
        return <li key={item}><Link to={detailLink}>{listings[item].address}</Link></li>;
      });
      return (
        <div>
          <ul className="list-unstyled">
            {listItems}
          </ul>
          <button className="btn btn-xs btn-default" onClick={() => this.props.clearRecentlyViewed()}>
            <FontAwesome name='close' /> Clear
          </button>
        </div>
      );
    } else {
      return (
        <p className="small">The recent items you view<br/> will show up here!</p>
      );
    }
  }
  render() {
    return (
      <div className="recent">
        <h2>Recently Viewed</h2>
        {this.renderViewedItems(this.props.viewedItems, this.props.listings)}
      </div>
    );
  }
}

RecentlyViewed.propTypes = {
  clearRecentlyViewed: PropTypes.func.isRequired,
  viewedItems: PropTypes.array.isRequired,
  listings: PropTypes.array.isRequired
};

export default RecentlyViewed;
