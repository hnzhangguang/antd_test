import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank, Flex } from 'antd-mobile';

/**
 * 
 */
class Button1 extends Component {
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
				<WingBlank>
					<div onClick={this.back}> 返回 </div>

					<Button>default</Button>
					<WhiteSpace />
					<Button disabled>default disabled</Button>
					<WhiteSpace />

					<Button type="primary">primary</Button>
					<WhiteSpace />
					<Button type="primary" disabled>
						primary disabled
					</Button>
					<WhiteSpace />

					<Button type="warning">warning</Button>
					<WhiteSpace />
					<Button type="warning" disabled>
						warning disabled
					</Button>
					<WhiteSpace />

					<Button loading>loading button</Button>
					<WhiteSpace />
					<Button icon="check-circle-o">with icon</Button>
					<WhiteSpace />
					<Button
						icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}
					>
						with custom icon
					</Button>
					<WhiteSpace />
					<Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>
						with icon and inline
					</Button>
					<Button icon="check-circle-o" inline size="small">
						with icon and inline
					</Button>
					<WhiteSpace />

					{/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
					{/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

					<WhiteSpace />
					<Button type="primary" inline style={{ marginRight: '4px' }}>
						inline primary
					</Button>
					{/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
					<Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">
						inline ghost
					</Button>

					<WhiteSpace />
					<Button type="primary" inline size="small" style={{ marginRight: '4px' }}>
						primary
					</Button>
					<Button type="primary" inline size="small" disabled>
						primary disabled
					</Button>
					<WhiteSpace />
					<Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>
						ghost
					</Button>
					{/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
					<Button type="ghost" inline size="small" className="am-button-borderfix" disabled>
						ghost disabled
					</Button>

					<div>
						<Button type="primary" inline size="small" style={{ marginRight: '4px' }}>
							primary
						</Button>
						<Button type="primary" inline size="small">
							primary
						</Button>
					</div>

					<Flex justify="between">
						<Flex.Item>
							<Button type="primary" inline size="small">
								primary
							</Button>
							<Button type="primary" inline size="small">
								primary
							</Button>
						</Flex.Item>
						<Flex.Item>
							<Button type="primary" inline size="small">
								primary
							</Button>
							<Button type="primary" inline size="small">
								primary
							</Button>
						</Flex.Item>
					</Flex>
				</WingBlank>
			</div>
		);
	}
}
export default Button1;
