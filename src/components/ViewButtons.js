import React, { Component, PropTypes } from 'react';

class ViewButtons extends Component  {
	constructor() {
		super();
        this.renderButtonClasses = this.renderButtonClasses.bind(this);
	}
	renderButtonClasses(props) {
		const btnClasses = "btn btn-default";
		const btnClassesActive = btnClasses + " active";
		let tableViewClasses = btnClasses;
		let mapViewClasses = btnClasses;

		if (props.showAs === "table") {
			tableViewClasses = btnClassesActive;
			mapViewClasses = btnClasses;
		} else {
			tableViewClasses = btnClasses;
			mapViewClasses = btnClassesActive;
		}

		return (
			<div className="btn-group" role="group">
				<button onClick={() => props.setShowAs("table")} type="button" name="tableView" className={tableViewClasses}>Table View</button>
				<button onClick={() => props.setShowAs("map")} type="button" name="mapView" className={mapViewClasses}>Map View</button>
			</div>
		);
	}

	render() {
		return (
			this.renderButtonClasses({ ...this.props })
		);
	}
}

ViewButtons.propTypes = {
	showAs: PropTypes.string.isRequired,
	setShowAs: PropTypes.func.isRequired
};

export default ViewButtons;
