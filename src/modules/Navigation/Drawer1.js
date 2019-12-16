import React, { Component } from 'react';
import './Drawer1.less';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

/**
 *  onOpenChange : 抽屉开闭监听方法
 *  sidebar  : 抽屉里的内容
 *      open  : 抽屉开闭状态
 * transitions: 是否开启动画 
 * enableDragHandle: 是否允许拖拽
 */
class Drawer1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}
	onOpenChange = (...args) => {
		this.setState({ open: !this.state.open }, () => {
			console.log(args, '543', this.state.open);
		});
	};

	componentWillMount() {}
	componentDidMount() {}

	back = () => {
		this.props.history.goBack();
	};

	render() {
		// fix in codepen
		const sidebar = (
			<List>
				{[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ].map((i, index) => {
					if (index === 0) {
						return (
							<List.Item
								key={index}
								thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
								multipleLine
							>
								Category
							</List.Item>
						);
					}
					return (
						<List.Item key={index} thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
							Category{index}
						</List.Item>
					);
				})}
			</List>
		);

		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>
					Basic
				</NavBar>
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle
					contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
					sidebar={sidebar}
					open={this.state.open}
					onOpenChange={this.onOpenChange}
				>
					Click upper-left corner
				</Drawer>
			</div>
		);
	}
}
export default Drawer1;
