import React, { Component } from 'react';

import { Tag } from 'antd-mobile';
import './Tag1.css';

class Tag1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}

	onChange(selected) {
		console.log(`tag selected: ${selected}`);
	}
	back = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<div className="tag-container">
					<Tag data-seed="logId">Basic</Tag>
					<Tag selected>Selected</Tag>
					<Tag disabled>Disabled</Tag>
					<Tag onChange={this.onChange.bind(this, 'aaa')}>Callback</Tag>
					<Tag
						closable
						onClose={() => {
							console.log('onClose');
						}}
						afterClose={() => {
							console.log('afterClose');
						}}
					>
						Closable
					</Tag>
					<Tag small>Small and Readonly</Tag>
				</div>
			</div>
		);
	}
}
export default Tag1;
