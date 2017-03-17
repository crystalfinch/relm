import React, { PropTypes } from 'react';

const Login = (props) => {
	return (
		<div id="login" className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-4 col-sm-offset-4">
					<div className="well">
						<h1>{props.shortTitle}</h1>
						<form onSubmit={(e) => props.handleLoginForm(e)}>
							<div className="form-group">
								<input type="email" id="txtEmail" name="email" defaultValue="crystal.storm@gmail.com" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="password" id="txtPassword" name="password" defaultValue="opensezme!" className="form-control" placeholder="Password" />
							</div>
							<button type="submit" id="btnLogin" className="btn btn-secondary">Log In</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

Login.propTypes = {
    shortTitle: PropTypes.string,
	handleLoginForm: PropTypes.func
};

export default Login;
