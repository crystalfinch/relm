import React from 'react';

const SignUp = (props) => {
	return (
		<div id="signUp" className="wrap container">
			<div className="row">
				<div className="col-xs-12 col-sm-4 col-sm-offset-4">
					<div className="well">
						<h1>Sign Up</h1>
						<form onSubmit={(e) => props.handleSignUpForm(e)}>
							<div className="form-group">
								<input type="email" id="signUpEmail" name="signUpEmail" className="form-control" placeholder="Email" />
							</div>
							<div className="form-group">
								<input type="password" id="signUpPassword" name="signUpPassword" className="form-control" placeholder="Password" />
							</div>
							<button type="submit" id="btnSignUp" className="btn btn-default">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

SignUp.propTypes = {
	handleSignUpForm: PropTypes.func.isRequired
};

export default SignUp;
