import React, { Component } from 'react';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import './Menu1.less';

// 单级列表选择
const data = [
	{
		value: '1',
		label: 'Food'
	},
	{
		value: '2',
		label: 'Supermarket'
	},
	{
		value: '3',
		label: 'Extra',
		isLeaf: true
	}
];

/**
 *      className="single-foo-menu"
		data={initData}
		value={[ '1' ]}
		level={1}
		onChange={this.onChange}   // 选择后的回调
		height={document.documentElement.clientHeight * 0.6}
		onOk 点击确认按钮
		onCancel 点击取消按钮
		multiSelect 是否支持菜单多选
 */

class Menu1 extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			initData: '',
			show: false,
			selectValue: ''
		};
	}
	onChange = (value) => {
		let label = '';

		// forEach() 方法的练习
		// data.forEach((dataItem) => {
		// 	if (dataItem.value === value[0]) {
		// 		label = dataItem.label;
		// 	}
		// });

		// map() 方法的练习
		// data.map((item, index) => {
		// 	if (item.value === value[0]) {
		// 		label = item.label;
		// 	}
		// });

		for (let item in data) {
			if (item.value === value[0]) {
				label = item.label;
			}
		}

		console.log(label);

		this.setState({
			show: false,
			selectValue: label
		});
	};

	back = () => {
		this.props.history.goBack();
	};

	handleClick = (e) => {
		e.preventDefault(); // Fix event propagation on Android
		this.setState({
			show: !this.state.show
		});
		// mock for async data loading
		if (!this.state.initData) {
			setTimeout(() => {
				this.setState({
					initData: data
				});
			}, 200);
		}
	};

	onMaskClick = () => {
		this.setState({
			show: false
		});
	};

	render() {
		const { initData, show } = this.state;
		const menuEl = (
			<Menu
				className="single-foo-menu"
				data={initData}
				value={'1'}
				level={1}
				onChange={this.onChange}
				height={document.documentElement.clientHeight * 0.6}
			/>
		);
		const loadingEl = (
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: document.documentElement.clientHeight * 0.6,
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<ActivityIndicator size="large" />
			</div>
		);
		return (
			<div className={show ? 'single-menu-active' : ''}>
				<div onClick={this.back}> 返回 </div>
				<div>
					<NavBar
						leftContent="Menu"
						mode="light"
						onLeftClick={this.handleClick}
						className="single-top-nav-bar"
					>
						OneLevel menu
					</NavBar>
				</div>
				{show ? initData ? menuEl : loadingEl : null}
				{show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
			</div>
		);
	}
}
export default Menu1;
