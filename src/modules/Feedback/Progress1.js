import React, { Component } from 'react';
import { Progress, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import './Progress1.css';

class Progress1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percent: 50
		};
	}
	componentWillMount() {}
	componentDidMount() {}

	add = () => {
		let p = this.state.percent + 10;
		if (this.state.percent >= 100) {
			p = 0;
		}
		this.setState({ percent: p });
	};
	back = () => {
		this.props.history.goBack();
	};
	render() {
		const { percent } = this.state;
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<div className="progress-container">
					<Progress percent={30} position="fixed" />
					<div style={{ height: 18 }} />
					<Progress percent={40} position="normal" unfilled={false} appearTransition />
					<div className="show-info">
						<div className="progress">
							<Progress percent={percent} position="normal" />
						</div>
						<div aria-hidden="true">{percent}%</div>
					</div>
					<WhiteSpace size="xl" />
					<WingBlank>
						<Button onClick={this.add}>(+-)10</Button>
					</WingBlank>
				</div>
			</div>
		);
	}
}
export default Progress1;
