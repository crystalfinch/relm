import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Welcome = (props) => {
  const { firstName } = props.profile;
  return (
    <div>
      <p>Welcome, {firstName}!</p>
      <Link to="/profile" className="btn btn-xs btn-default">Edit Profile</Link>
    </div>
  );
}

Welcome.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Welcome;
