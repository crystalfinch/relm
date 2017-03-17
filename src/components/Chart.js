import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export class Chart extends Component {
	constructor() {
		super();
		this.getStatusTotals = this.getStatusTotals.bind(this);
		this.state = {
			"available": 0,
			"pending": 0,
			"sold": 0
		}
	}
	getStatusTotals(items) {
		let totalAvailable = 0;
		let totalPending = 0;
		let totalSold = 0;
		items.forEach(item => {
			switch (item.status) {
				case 'Available':
					totalAvailable++;
					break;
				case 'Pending':
					totalPending++;
					break;
				case 'Sold':
					totalSold++;
					break;
				default:
					break;
			}
		});
		this.setState({
			"available": totalAvailable,
			"pending": totalPending,
			"sold": totalSold
		});
	}
	componentWillReceiveProps(nextProps) {
		this.getStatusTotals(nextProps.items);
	}
	componentDidMount() {
		this.getStatusTotals(this.props.items);
	}
	render() {
		const chartWrapStyles = {
			marginRight: "1em",
			marginTop: ".5em"
		}
		const options = {
			legend: {
				position: 'bottom'
			}
		}
		const chartData = {
	            labels: ["Available", "Pending", "Sold"],
	            datasets: [{
	                backgroundColor: [
	                    "#6ea96e",
	                    "#d0ba50",
	                    "#999",
	                ],
	                data: [
						this.state.available,
						this.state.pending,
						this.state.sold
					]
	            }]
	        }
		return (
			<div className="well" style={chartWrapStyles}>
				<Pie data={chartData} options={options} width={200} />
			</div>
		);
	}
}

export default Chart;
