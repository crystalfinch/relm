import React, { Component, PropTypes } from 'react';
import { printPage } from '../helpers';
import FontAwesome from 'react-fontawesome';

// Components
import Agent from './Agent';
import RecentlyViewed from './RecentlyViewed';
import ViewButtons from './ViewButtons';
import Listings from './Listings';

class Main extends Component {
    constructor() {
		super();
		this.setShowAs = this.setShowAs.bind(this);
        this.renderListings = this.renderListings.bind(this);
		this.state = {
			showAs: "table"
		}
	}
	setShowAs(type) {
		this.setState({
			showAs: type
		});
	}
    renderListings(listingType) {
		if (listingType === "table") {
			return (
                <Listings items={this.props.items} loggedIn={this.props.loggedIn} removeListing={this.props.removeListing} setRecentlyViewed={this.props.setRecentlyViewed} />
			);
		} else if (listingType === "map") {
            const mapStyles = {
    			backgroundColor: '#eee',
                display: 'table',
    			height: '20em',
                marginTop: '1em',
                textAlign: 'center',
    			width: '100%'
    		}
            const paraStyles = {
                color: '#666',
                display: 'table-cell',
                verticalAlign: 'middle'
            }
			return (
				<div style={mapStyles}>
                    <p style={paraStyles}>
                        This demo app contains fake addresses, so this map
                        <br/> has been left out for simplicity's sake!
                    </p>
                </div>
			);
		}
	}
    render() {
        return (
            <div id="main" className="wrap container">
				<div className="row">
					<aside className="col-xs-12 col-sm-12 col-md-3">
                        <Agent details={this.props.profile} loggedIn={this.props.loggedIn} />
						<RecentlyViewed
                            viewedItems={this.props.recentlyViewed}
                            listings={this.props.items}
                            clearRecentlyViewed={this.props.clearRecentlyViewed}
                            />
					</aside>
					<div className="content col-xs-12 col-sm-12 col-md-9">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
        						<p className="pull-right">
                                    <a href="#" className="printBtn btn btn-sm btn-default" onClick={(e) => printPage(e) }>
                                        <FontAwesome name='print' />&nbsp;&nbsp;Print This Page
                                    </a>
                                </p>
                                <h1 className="pull-left">Property Listings</h1>
                            </div>
                        </div>
                        <ViewButtons setShowAs={this.setShowAs} showAs={this.state.showAs} />
						{this.renderListings(this.state.showAs)}
					</div>
				</div>
			</div>
        );
    }
}

Main.propTypes = {
    loggedIn: PropTypes.bool,
    profile: PropTypes.object,
    items: PropTypes.array,
    removeListing: PropTypes.func,
    setRecentlyViewed: PropTypes.func,
    clearRecentlyViewed: PropTypes.func,
    recentlyViewed: PropTypes.array,
};

export default Main;
