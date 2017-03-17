import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Agent extends Component {
	render() {
		const { firstName, lastName, company, phone, email } = this.props.details;
		const emailLink = `mailto:${email}?subject=General%20Inquiry`;
		const phoneLink = `tel:${phone}`;
		const btnClasses = "btn btn-default";
		const editProfileBtn = this.props.loggedIn ? <Link to="/profile" className="btn btn-xs btn-default">Edit Profile</Link> : null;

		return (
			<div className="agent">
				<div className="row">
					<div className="avatar col-xs-12 col-sm-1 col-md-3">
						<FontAwesome name='user-circle-o' />
					</div>
					<div className="col-xs-12 col-sm-11 col-md-9">
						<h2>{firstName} {lastName}</h2>
						<h3>{company}</h3>
					</div>
				</div>
				<div className="row">
					<div className="buttons col-xs-12 col-sm-12">
						<a href={emailLink} className={btnClasses}>Email Agent</a>
						<a href={phoneLink} className={btnClasses}>Call Agent</a>
					</div>
				</div>
				{editProfileBtn}
			</div>
		);
	}
}

Agent.propTypes = {
	details: PropTypes.object.isRequired,
	loggedIn: PropTypes.bool.isRequired
};

export default Agent;
