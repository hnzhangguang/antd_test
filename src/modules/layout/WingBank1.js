import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './WingBank1.css';

const PlaceHolder = ({ className = '', ...restProps }) => (
	<div className={`${className} placeholder`} {...restProps}>
		Block
	</div>
);

/**
 * WingBlank 两翼留白: size	两翼留白的间距，可选sm,md,lg
 * WhiteSpace 上下留白: size	上下留白的间距，可选xs,sm,md,lg,xl
 * 
 */
class WingBlank1 extends Component {
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
			<div style={{ padding: '15px 0' }}>
				<div onClick={this.back}> 返回 </div>

				<WingBlank>
					<PlaceHolder />
				</WingBlank>

				<WhiteSpace size="lg" />
				<WingBlank size="md">
					<PlaceHolder />
				</WingBlank>

				<WhiteSpace size="lg" />
				<WingBlank size="sm">
					<PlaceHolder />
				</WingBlank>

				<WhiteSpace size="xs" />
				<PlaceHolder />

				<WhiteSpace size="sm" />
				<PlaceHolder />

				<WhiteSpace />
				<PlaceHolder />

				<WhiteSpace size="lg" />
			</div>
		);
	}
}
export default WingBlank1;
