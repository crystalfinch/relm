import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Header = (props) => {
	const isLoggedIn = props.loggedIn;
	const logout = props.doLogout;
	const headerClass = isLoggedIn ? "logged-in" : "logged-out";
	const { firstName, lastName } = props.profile;
	const renderMenu = () => {
		const menuClasses = "user-menu list-inline"
		return (
			<nav className="pull-right">
				<ul className={menuClasses}>
					<li><Link to="/dashboard" activeClassName="current">Dashboard</Link></li>
					<li>
						<FontAwesome name='user-circle-o' /> <span>{firstName} {lastName}</span>
						<ul>
							<li><Link to="/profile" activeClassName="current">Profile</Link></li>
							<li><Link to="/" onClick={() => logout()}>Log Out</Link></li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
	const renderHeader = () => {
		if (isLoggedIn) {
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<h1 title={props.fullTitle}><Link to="/">{props.shortTitle}</Link></h1>
						</div>
						<div className="col-xs-12 col-sm-6">
							{renderMenu()}
						</div>
					</div>
				</div>
			);
		}
	}
	return (
		<header id="header" className={headerClass}>
			{renderHeader(props)}
		</header>
	);
}

Header.propTypes = {
	loggedIn: PropTypes.bool.isRequired,
	doLogout: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	fullTitle: PropTypes.string.isRequired,
	shortTitle: PropTypes.string.isRequired
};

export default Header;
