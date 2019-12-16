import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class NavBar1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}
	back = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => {
						console.log('onLeftClick');
						this.back();
					}}
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />
					]}
				>
					NavBar
				</NavBar>

				<NavBar
					mode="dark"
					leftContent="Back"
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />
					]}
				>
					NavBar
				</NavBar>
			</div>
		);
	}
}
export default NavBar1;
