import React, { Component } from 'react';

import { List, Stepper } from 'antd-mobile';

class Stepper1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: 3,
			val1: 2
		};
	}
	componentWillMount() {}
	componentDidMount() {}
	back = () => {
		this.props.history.goBack();
	};
	onChange = (val) => {
		// console.log(val);
		this.setState({ val });
	};
	onChange1 = (val1) => {
		// console.log(val);
		this.setState({ val1 });
	};

	render() {
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<List>
					<List.Item
						wrap
						extra={
							<Stepper
								style={{ width: '100%', minWidth: '100px' }}
								showNumber
								max={10}
								min={1}
								value={this.state.val}
								onChange={this.onChange}
							/>
						}
					>
						Show number value
					</List.Item>
					<List.Item
						extra={
							<Stepper
								style={{ width: '100%', minWidth: '100px' }}
								showNumber
								max={10}
								min={1}
								defaultValue={3}
								disabled
							/>
						}
					>
						Disabled
					</List.Item>
				</List>
			</div>
		);
	}
}
export default Stepper1;
