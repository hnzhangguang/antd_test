import React, { Component } from 'react';

import { Icon, Grid } from 'antd-mobile';

const list = [
	'check-circle',
	'check',
	'check-circle-o',
	'cross-circle',
	'cross',
	'cross-circle-o',
	'up',
	'down',
	'left',
	'right',
	'ellipsis',
	'loading'
];

class Icon1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}

	back = () => {
		this.props.history.goBack();
	};

	render() {
		const data = list.map((item) => ({
			icon: <Icon type={item} />,
			text: item
		}));

		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
			</div>
		);
	}
}
export default Icon1;
