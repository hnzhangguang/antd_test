import React, { Component } from 'react';

class PImgPoint extends Component {
	handlePoint = () => {
		if (this.props.onPoint) {
			this.props.onPoint(this.props.id);
		}
	};

	reStart = () => {
		if (this.props.start) {
			this.props.start();
		}
	};

	render() {
		return (
			<a href="#" color="blue">
				<span
					id={this.props.id}
					className="point"
					style={this.props.style}
					onMouseOver={this.handlePoint}
					onMouseOut={this.reStart}
				>
					●
				</span>
			</a>
		);
	}
}

export default PImgPoint;
