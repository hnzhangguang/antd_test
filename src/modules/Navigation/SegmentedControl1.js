import React, { Component } from 'react';
import { SegmentedControl, WingBlank } from 'antd-mobile';
import './SegmentedControl1.css';

class SegmentedControl1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}

	onChange = (e) => {
		console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
	};
	onValueChange = (value) => {
		console.log(value);
	};
	back = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<WingBlank size="lg" className="sc-example">
					<p className="sub-title">Simplest</p>
					<SegmentedControl values={[ 'Segment1', 'Segment2' ]} />

					<p className="sub-title">Disabled</p>
					<SegmentedControl values={[ 'Segment1', 'Segment2' ]} disabled />

					<p className="sub-title">SelectedIndex</p>
					<SegmentedControl selectedIndex={1} values={[ 'Segment1', 'Segment2', 'Segment3' ]} />

					<p className="sub-title">TintColor</p>
					<SegmentedControl
						values={[ 'Segment1', 'Segment2', 'Segment3' ]}
						tintColor={'#ff0000'}
						style={{ height: '40px', width: '250px' }}
					/>

					<p className="sub-title">onChange/onValueChange</p>
					<SegmentedControl
						values={[ 'Segment1', 'Segment2', 'Segment3' ]}
						onChange={this.onChange}
						onValueChange={this.onValueChange}
					/>
				</WingBlank>
			</div>
		);
	}
}
export default SegmentedControl1;
