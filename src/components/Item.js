import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { formatPrice } from '../helpers';
import FontAwesome from 'react-fontawesome';

class Item extends Component {
	constructor() {
		super();
		this.editHandler = this.editHandler.bind(this);
		this.removeHandler = this.removeHandler.bind(this);
		this.viewDetailHandler = this.viewDetailHandler.bind(this);
	}
	editHandler(index) {
		const redirect = `/edit-listing?id=${index}`;
		browserHistory.push(redirect);
	}
	removeHandler(index) {
		this.props.removeListing(index);
	}
	viewDetailHandler(e, id) {
		e.preventDefault();
		this.props.setRecentlyViewed(id);
		const detailLink = `/detail?id=${id}`;
		browserHistory.push(detailLink);
	}
	render() {
		const { details } = this.props;
		const index = this.props.index;
		const editButtons = <div>
								<a className="btn btn-xs btn-default" onClick={() => this.editHandler(index)} title="Edit">
									<FontAwesome name='pencil' />
								</a>
								<a className="btn btn-xs btn-default" onClick={() => this.removeHandler(index)} title="Remove">
									<FontAwesome name='trash' />
								</a>
							</div>;
		const editable = this.props.loggedIn ? <td className="table-buttons">{editButtons}</td> : null;

		return (
			<tr>
				<td><a href="" onClick={(e) => this.viewDetailHandler(e, index)}>{details.address}</a></td>
				<td>{details.beds}/{details.baths}</td>
				<td>{details.homeType}</td>
				<td className="table-price">{formatPrice(details.price)}</td>
				{editable}
			</tr>
		);
	}
}

Item.propTypes = {
	removeListing: PropTypes.func.isRequired,
	setRecentlyViewed: PropTypes.func.isRequired,
	index: PropTypes.string.isRequired,
	loggedIn: PropTypes.bool.isRequired
};

export default Item;
