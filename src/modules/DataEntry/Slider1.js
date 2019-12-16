import React, { Component } from 'react';

import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

import './Slider1.css';
class Test extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}

	log = (name) => {
		return (value) => {
			console.log(`${name}: ${value}`);
		};
	};
	back = () => {
		this.props.history.goBack();
	};
	render() {
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<div className="am-slider-example">
					<WhiteSpace size="lg" />
					<WingBlank size="lg">
						<p className="sub-title">Slider</p>
						<Slider
							style={{ marginLeft: 30, marginRight: 30 }}
							defaultValue={26}
							min={0}
							max={30}
							onChange={this.log('change')}
							onAfterChange={this.log('afterChange')}
						/>
					</WingBlank>
					<WhiteSpace size="lg" />
					<WingBlank size="lg">
						<p className="sub-title">Disabled slider</p>
						<Slider
							style={{ marginLeft: 30, marginRight: 30 }}
							defaultValue={26}
							min={0}
							max={30}
							disabled
							onChange={this.log('change')}
							onAfterChange={this.log('afterChange')}
						/>
					</WingBlank>
					<WhiteSpace size="lg" />
					<WingBlank size="lg">
						<p className="sub-title">Slider with customized color</p>
						<Slider
							style={{ marginLeft: 30, marginRight: 30 }}
							defaultValue={26}
							min={0}
							max={30}
							trackStyle={{
								backgroundColor: 'red',
								height: '5px'
							}}
							railStyle={{
								backgroundColor: 'blue',
								height: '5px'
							}}
							handleStyle={{
								borderColor: 'blue',
								height: '14px',
								width: '14px',
								marginLeft: '-7px',
								marginTop: '-4.5px',
								backgroundColor: 'blue'
							}}
						/>
					</WingBlank>
				</div>
			</div>
		);
	}
}
export default Test;
