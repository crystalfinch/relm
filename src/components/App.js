import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import base from '../base'; // re-base for Firebase
import { browserHistory } from 'react-router';
import DOMPurify from 'dompurify';

// Components
import Header from './Header';
import Footer from './Footer';

export class App extends Component {
    constructor() {
		super();
        this.handleLoginForm = this.handleLoginForm.bind(this);
        //this.handleSignUpForm = this.handleSignUpForm.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        //this.createUser = this.createUser.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
        this.setRecentlyViewed = this.setRecentlyViewed.bind(this);
        this.clearRecentlyViewed = this.clearRecentlyViewed.bind(this);
		this.state = {
            loggedIn: false
            // recentlyViewed gets initialized in componentWillMount()
		}
	}
    handleLoginForm = (e) => {
		//console.log("called handleLoginForm()");
		e.preventDefault();
		this.doLogin(e);
	}
	/*handleSignUpForm = (e) => {
		console.log("called handleSignUpForm()");
		e.preventDefault();
		this.createUser(e);
	}*/
    handleAuth(error, user) {
        //console.log("called handleAuth()");
        if (user) {
            //console.log("User " + user.uid + " is logged in with " + user.providerId);
            this.setState({
                loggedIn: true
            });
            browserHistory.push('/dashboard');
        } else {
            //console.log("User is logged out");
            this.setState({
                loggedIn: false
            });
            browserHistory.push('/');
        }
    }
    /*createUser(e) {
        console.log("called createUser()");
        //const cleanEmail = DOMPurify.sanitize(evt.target.signUpEmail.value);
        //const cleanPassword = DOMPurify.sanitize(evt.target.signUpPassword.value);
        const creds = {
            email: e.target.signUpEmail.value,
            password: e.target.signUpPassword.value
        }
		// Create in firebase
	    base.createUser(creds, this.handleAuth);
	}*/
    doLogin(e) {
        //console.log("called doLogin()");
        const cleanEmail = DOMPurify.sanitize(e.target.email.value);
        const cleanPassword = DOMPurify.sanitize(e.target.password.value);
        const creds = {
            email: cleanEmail,
            password: cleanPassword
        }
        base.authWithPassword(creds, this.handleAuth);
    }
    doLogout() {
        //console.log('called doLogout()');
        base.unauth();
        this.setState({
            loggedIn: false
        });
        browserHistory.push('/');
    }
    setRecentlyViewed(id) {
        const localStorageRef = localStorage.getItem('relm-recently');
        let recentlyViewed = localStorageRef ? JSON.parse(localStorageRef) : [];

        recentlyViewed.push(id);

        // add new id to local storage item
        localStorage.setItem('relm-recently', JSON.stringify(recentlyViewed)); // serialize

        // add new id to state
        this.setState({
            recentlyViewed: recentlyViewed
        });
    }
    clearRecentlyViewed() {
        // remove local storage item
        localStorage.removeItem('relm-recently');
        // clear the state
        this.setState({
            recentlyViewed: []
        });
    }
    componentWillMount() {
        // initial check for recently viewed listings in localStorage
        const localStorageRef = localStorage.getItem('relm-recently');
        // if there are any, set them to state -- otherwise set an empty array
        this.setState({
            recentlyViewed: localStorageRef ? JSON.parse(localStorageRef) : [] // deserialize
        });
    }
    render() {
        let { dispatch } = this.props;
		let boundActionCreators = bindActionCreators(actions, dispatch);
        const shortTitle = "RELM";
        const fullTitle = "Real Estate Listing Management";
		return (
            <div>
                <Header
                    shortTitle={shortTitle}
                    fullTitle={fullTitle}
                    profile={this.props.profile}
                    loggedIn={this.state.loggedIn}
                    doLogout={this.doLogout}
                />
                    {React.cloneElement(this.props.children, {
                        shortTitle: shortTitle,
                        loggedIn: this.state.loggedIn,
                        profile: this.props.profile,
                        recentlyViewed: this.state.recentlyViewed,
                        setRecentlyViewed: this.setRecentlyViewed,
                        clearRecentlyViewed: this.clearRecentlyViewed,
                        handleLoginForm: this.handleLoginForm,
                        // handleSignUpForm: this.handleSignUpForm,
                        items: this.props.listings,
                        addListing: boundActionCreators.addListing,
                        editListing: boundActionCreators.editListing,
                        removeAllListings: boundActionCreators.removeAllListings,
                        removeListing: boundActionCreators.removeListing,
                        viewListing: boundActionCreators.viewListing,
                        editProfile: boundActionCreators.editProfile
                    })}
                <Footer fullTitle={fullTitle} loggedIn={this.state.loggedIn} currentPath={this.props.location.pathname} />
            </div>
		);
	}
}

function mapStateToProps(state) {
   return {
       profile: state.profile,
       listings: state.listings
   };
}

App.propTypes = {
	profile: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    listings: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps
)(App);
