import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import DOMPurify from 'dompurify';

class Profile extends Component {
  constructor() {
    super();
    this.handleEditProfile = this.handleEditProfile.bind(this);
  }
  handleEditProfile(evt) {
    evt.preventDefault();

    const cleanFirstName = DOMPurify.sanitize(evt.target.firstName.value);
    const cleanLastName = DOMPurify.sanitize(evt.target.lastName.value);
    const cleanEmail = DOMPurify.sanitize(evt.target.email.value);
    const cleanPhone = DOMPurify.sanitize(evt.target.phone.value);
    const cleanCompany = DOMPurify.sanitize(evt.target.company.value);

    const editedProfile = {
      "firstName": cleanFirstName,
      "lastName": cleanLastName,
      "email": cleanEmail,
      "phone": cleanPhone,
      "company": cleanCompany
      //photo
    }
    this.props.editProfile(editedProfile);

    browserHistory.push('/dashboard');

  }
  render() {
    const profile = this.props.profile;
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
            <h1>Edit Profile</h1>
            <form onSubmit={(evt) => this.handleEditProfile(evt)}>
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <br/>
                  <div className="row">
                    <div className="col-xs-12 col-sm-3">
                      {/* First Name */}
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" defaultValue={profile.firstName} className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                      {/* Last Name */}
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" defaultValue={profile.lastName} className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-4">
                      {/* Company */}
                      <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" defaultValue={profile.company} className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-3">
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" defaultValue={profile.email} className="form-control" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-2">
                      {/* Phone */}
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" defaultValue={profile.phone} className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo */}
              {/*
              <div className="form-group">
                <label htmlFor="photos">Photos</label>
                <input type="file" name="photos" />
                <button onClick={addPhotoField}>Add</button>
              </div>
              */}

              <br/>
              <button type="submit" className="btn btn-secondary">Save Changes</button>&nbsp;&nbsp;&nbsp;
              <Link to="/dashboard" className="btn btn-default">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  editProfile: PropTypes.func,
  profile:  PropTypes.object
};

export default Profile;
