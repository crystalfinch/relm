import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import DOMPurify from 'dompurify';

class AddListing extends Component {
	constructor() {
		super();
		this.handleAddListing = this.handleAddListing.bind(this);
	}
	handleAddListing(evt) {
		evt.preventDefault();
		const cleanAddress = DOMPurify.sanitize(evt.target.address.value);
		const cleanCity = DOMPurify.sanitize(evt.target.city.value);
		const cleanZip = DOMPurify.sanitize(evt.target.zip.value);
		const cleanBeds = DOMPurify.sanitize(evt.target.beds.value);
		const cleanBaths = DOMPurify.sanitize(evt.target.baths.value);
		const cleanSquareFootage = DOMPurify.sanitize(evt.target.squareFootage.value);
		const cleanLot = DOMPurify.sanitize(evt.target.lot.value);
		const cleanDescription = DOMPurify.sanitize(evt.target.description.value);
		const cleanPrice = DOMPurify.sanitize(evt.target.price.value);
		const cleanHoaFee = DOMPurify.sanitize(evt.target.hoaFee.value);

		const newListing = {
			address: cleanAddress,
			city: cleanCity,
			addressState: evt.target.addressState.value,
			zip: cleanZip,
			homeType: evt.target.homeType.value,
			yearBuilt: evt.target.yearBuilt.value,
			beds: cleanBeds,
			baths: cleanBaths,
			stories: evt.target.stories.value,
			squareFootage: parseInt(cleanSquareFootage, 10),
			lot: parseInt(cleanLot, 10),
			dateAdded: Date.now(),
			dateSold: null,
			status: evt.target.status.value,
			description: cleanDescription,
			//photos
			price: parseInt(cleanPrice, 10),
			hasHoa: (cleanHoaFee === "0") ? false : true,
			hoaFee: parseInt(cleanHoaFee, 10)
		}
		this.props.addListing(newListing);

		browserHistory.push('/dashboard');
	}
	render() {
		return (
			<div className="wrap container">
				<div className="row">
					<div className="col-xs-12 col-sm-12">
						<p>
							<Link to="/dashboard" className="btn btn-sm btn-default">
								<FontAwesome name='long-arrow-left' />&nbsp;&nbsp;Back to Dashboard
							</Link>
						</p>
						<hr />
						<h1>Add Listing</h1>
						<form onSubmit={(evt) => this.handleAddListing(evt)}>

							<div className="row">
								<div className="col-xs-12 col-sm-12">
									<br/>
									<fieldset>
										<legend>Property Location</legend>
										<div className="row">
											<div className="col-xs-12 col-sm-4">
												{/* Address */}
												<div className="form-group">
													<label htmlFor="address">Address</label>
													<input type="text" name="address" defaultValue="777 Mindful Pl." className="form-control" />
												</div>
											</div>
											<div className="col-xs-12 col-sm-3">
												{/* City */}
												<div className="form-group">
													<label htmlFor="city">City</label>
													<input type="text" name="city" defaultValue="Santa Cruz" className="form-control" />
												</div>
											</div>
											<div className="col-xs-12 col-sm-3">
												{/* State */}
												<div className="form-group">
													<label htmlFor="addressState">State</label>
													<select name="addressState" defaultValue="CA" className="form-control">
														<option value="CA">California</option>
														<option value="HI">Hawaii</option>
														<option value="NY">New York</option>
													</select>
												</div>
											</div>
											<div className="col-xs-12 col-sm-2">
												{/* Zip */}
												<div className="form-group">
													<label htmlFor="zip">Zip</label>
													<input type="text" name="zip" defaultValue="95062" className="form-control" />
												</div>
											</div>
										</div>
									</fieldset>
								</div>
							</div>

							<div className="row">
								<div className="col-xs-12 col-sm-12">
									<br/>
									<fieldset>
										<legend>Property Details</legend>

										<div className="row">
											<div className="col-xs-12 col-sm-5">

												<div className="row">
													<div className="col-xs-12 col-sm-5">
														{/* Home Type */}
														<div className="form-group">
															<label htmlFor="homeType">Home Type</label>
															<select name="homeType" defaultValue="Townhome" className="form-control">
																<option value="House">House</option>
																<option value="Apartment">Apartment</option>
																<option value="Condo/Co-op">Condo/Co-op</option>
																<option value="Townhome">Townhome</option>
																<option value="Manufactured">Manufactured</option>
																<option value="Lot/Land">Lot/Land</option>
															</select>
														</div>
													</div>
													<div className="col-xs-12 col-sm-5">
														{/* Year Built */}
														<div className="form-group">
															<label htmlFor="yearBuilt">Year Built</label>
															<select name="yearBuilt" defaultValue="2000" className="form-control">
																<option value="1999">1999</option>
																<option value="2000">2000</option>
																{/* Populate Years */}
															</select>
														</div>
													</div>
												</div>

												<div className="row">
													<div className="col-xs-12 col-sm-3">
														{/* Beds */}
														<div className="form-group">
															<label htmlFor="beds">Beds</label>
															<input type="text" name="beds" defaultValue="1" className="form-control" />
														</div>
													</div>
													<div className="col-xs-12 col-sm-3">
														{/* Baths */}
														<div className="form-group">
															<label htmlFor="baths">Baths</label>
															<input type="text" name="baths" defaultValue="1" className="form-control" />
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-xs-12 col-sm-3">
														{/* Stories */}
														<div className="form-group">
															<label htmlFor="stories">Stories</label>
															<select name="stories" defaultValue="1" className="form-control">
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
																<option value="4">4</option>
															</select>
														</div>
													</div>
													<div className="col-xs-12 col-sm-5">
														{/* Square Footage */}
														<div className="form-group">
															<label htmlFor="squareFootage">Square Footage</label>
															<input type="text" name="squareFootage" defaultValue="500" className="form-control" />
														</div>
													</div>
													<div className="col-xs-12 col-sm-4">
														{/* Lot */}
														<div className="form-group">
															<label htmlFor="lot">Lot Size</label>
															<input type="text" name="lot" defaultValue="1000" className="form-control" />
														</div>
													</div>
												</div>
											</div>
											<div className="col-xs-12 col-sm-5 col-sm-offset-1">
												<div className="row">
													<div className="col-xs-12 col-sm-6">
														{/* Status */}
														<div className="form-group">
															<label htmlFor="status">Status</label>
															<select name="status" defaultValue="Available" className="form-control">
																<option value="Available">Available</option>
																<option value="Pending">Pending</option>
																<option value="Sold">Sold</option>
															</select>
														</div>
													</div>
												</div>
												{/* Description */}
												<div className="form-group">
													<label htmlFor="description">Description</label>
													<textarea name="description" defaultValue="No description available." rows="5" className="form-control"></textarea>
												</div>
											</div>
										</div>
									</fieldset>
									{/* DATE ADDED */}
									{/* DATE SOLD */}
								</div>
							</div>

							{/* Photos */}
							{/*
							<div className="form-group">
								<label htmlFor="photos">Photos</label>
								<input type="file" name="photos" />
								<button onClick={addPhotoField}>Add</button>
							</div>
							*/}

							<div className="row">
								<div className="col-xs-12 col-sm-12">
									<br/>
									<fieldset>
										<legend>Financial Information</legend>
										<div className="row">
											<div className="col-xs-12 col-sm-3">
												{/* Price */}
												<div className="form-group">
													<label htmlFor="price">Price</label>
													<input type="text" name="price" defaultValue="0" className="form-control" />
												</div>
												{/* HOA Fee */}
												<div className="form-group">
													<label htmlFor="hoaFee">HOA Fee</label>
													<input type="text" name="hoaFee" defaultValue="0" className="form-control" />
													{/* if no value, set hasHoa to false */}
												</div>
											</div>
										</div>
									</fieldset>
								</div>
							</div>

							<br/>
							<button type="submit" className="btn btn-secondary">Add Listing</button>&nbsp;&nbsp;&nbsp;
							<Link to="/dashboard" className="btn btn-default">Cancel</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

AddListing.propTypes = {
	addListing: PropTypes.func
};

export default AddListing;
