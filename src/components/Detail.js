import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { formatPrice, formatNumber, printPage } from '../helpers';
import FontAwesome from 'react-fontawesome';

// Components
import Carousel from './Carousel';

class Detail extends Component {
	render() {
		const id = this.props.location.query.id;
		const listing = this.props.items[id];
		const hoaFee = (listing.hoaFee === 0) ? "None" : formatPrice(listing.hoaFee);
		const badgeClasses = `badge badge--${listing.status.toLowerCase()}`;
		return (
            <div id="main" className="wrap container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
						<p className="pull-left">
							<Link to="/" className="btn btn-sm btn-default">
								<FontAwesome name='long-arrow-left' />&nbsp;&nbsp;Back to Listings
							</Link>
						</p>
						<p className="pull-right">
							<a href="#" className="btn btn-sm btn-default" onClick={(e) => printPage(e) }>
								<FontAwesome name='print' />&nbsp;&nbsp;Print This Page
							</a>
						</p>
						<hr />
                    </div>
                </div>
				<div className="row">
					<div className="content col-xs-12 col-sm-7">
						{/* Status */}
						<p><span className={badgeClasses}>{listing.status}</span></p>
						<h1>
							{/* Address */}
							{listing.address}
							{/* City, State & Zip */}
							<span className="small">
								<br/>{listing.city}, {listing.addressState} {listing.zip}
							</span>
						</h1>
						{/* Beds, Baths & Square Footage */}
						<p>
							{listing.beds} Beds &bull;&nbsp;
							{listing.baths} Baths &bull;&nbsp;
							{formatNumber(listing.squareFootage)}sqft
						</p>

						{/* Description */}
						{listing.description}

						<table className="table">
							<tbody>
								{/* Home Type */}
								<tr>
									<th>Home Type</th>
									<td>{listing.homeType}</td>
								</tr>
								{/* Year Built */}
								<tr>
									<th>Year Built</th>
									<td>{listing.yearBuilt}</td>
								</tr>
								{/* Stories */}
								<tr>
									<th>Stories</th>
									<td>{listing.stories}</td>
								</tr>
								{/* Lot */}
								<tr>
									<th>Lot</th>
									<td>{formatNumber(listing.lot)}sqft</td>
								</tr>
								{/* DATE ADDED */}
								{/* DATE SOLD */}
								{/* Photos */}
								{/* Price */}
								<tr>
									<th>Price</th>
									<td>{formatPrice(listing.price)}</td>
								</tr>
								{/* HOA Fee */}
								<tr>
									<th>HOA Fee</th>
									<td>{hoaFee}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-xs-12 col-sm-5">
						<Carousel/>
					</div>
				</div>
            </div>
		);
	}
}

Detail.propTypes = {
	location: PropTypes.object.isRequired,
	items: PropTypes.array
};

export default Detail;
