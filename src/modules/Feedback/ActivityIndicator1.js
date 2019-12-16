import React, { Component } from 'react';

import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import './ActivityIndicator1.css';

/**
 * ActivityIndicator 活动指示器
        活动指示器。 表明某个任务正在进行中。
    规则#
        不要让活动指示器静止，用户会以为该任务停滞了。
        在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中，eg：正在上传照片。
        如果能知道用户的等待时间，可以使用组件 Progress 来替代。
 */
class ActivityIndicator1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animating: false
		};
	}
	componentWillMount() {}
	componentDidMount() {}
	componentWillUnmount() {
		clearTimeout(this.closeTimer);
	}

	showToast = () => {
		this.setState({ animating: !this.state.animating });
		this.closeTimer = setTimeout(() => {
			this.setState({ animating: !this.state.animating });
		}, 1000);
	};

	render() {
		return (
			<div>
				<div>
					<WingBlank>
						<div className="loading-container">
							<p className="sub-title">Without text</p>
							<div className="loading-example">
								<ActivityIndicator animating />
							</div>
							<p className="sub-title">With text</p>
							<div className="loading-example">
								<ActivityIndicator text="Loading..." />
							</div>
							<p className="sub-title">With large size and customized text style</p>
							<div className="loading-example">
								<div className="align">
									<ActivityIndicator size="large" />
									<span style={{ marginTop: 8 }}>Loading...</span>
								</div>
							</div>
						</div>
						<div className="toast-container">
							<WhiteSpace size="xl" />
							<Button onClick={this.showToast}>click to show Toast</Button>
							<div className="toast-example">
								<ActivityIndicator toast text="Loading..." animating={this.state.animating} />
							</div>
						</div>
					</WingBlank>
				</div>
			</div>
		);
	}
}
export default ActivityIndicator1;
