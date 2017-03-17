import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { formatPrice, formatDate } from '../helpers';

class RecentListings extends Component {
	renderItem(key) {
		const details = this.props.items[key];
		const detailLink = `/detail?id=${key}`;

		return (
			<tr key={key}>
				<td><Link to={detailLink}>{details.address}</Link></td>
				<td className="price">{formatPrice(details.price)}</td>
				<td>{formatDate(details.dateAdded,"short")}</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table">
				<tbody>
					<tr>
						<th>Location</th>
						<th>Price</th>
						<th>Date Added</th>
					</tr>
					{Object.keys(this.props.items).map(key => this.renderItem(key))}
				</tbody>
			</table>
		);
	}
}

RecentListings.propTypes = {
	items: PropTypes.array.isRequired
};

export default RecentListings;
