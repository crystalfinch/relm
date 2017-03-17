import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { getYear } from '../helpers';

class Footer extends Component {
	constructor() {
		super();
		this.renderLoginLink = this.renderLoginLink.bind(this);
	}
	renderLoginLink(props) {
		if (props.currentPath === '/login') {
			return null;
		} else {
			const loginLink = props.loggedIn ? null : <Link to="/login" className="btn btn-xs btn-default pull-right">Log In</Link>;
			return loginLink;
		}
	}
	render() {
		return (
			<footer id="footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<p>&copy; {getYear()} {this.props.fullTitle}</p>
						</div>
						<div className="col-xs-12 col-sm-6">
							{this.renderLoginLink(this.props)}
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	currentPath: PropTypes.string.isRequired,
	loggedIn: PropTypes.bool.isRequired,
	fullTitle: PropTypes.string.isRequired
};

export default Footer;
