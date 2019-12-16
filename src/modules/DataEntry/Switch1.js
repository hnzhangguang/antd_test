import React, { Component } from 'react';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

class SwitchExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			checked1: true
		};
	}
	componentWillMount() {}
	componentDidMount() {}
	back = () => {
		this.props.history.goBack();
	};

	render() {
		const { getFieldProps } = this.props.form;
		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<List renderHeader={() => 'Form switch'}>
					<List.Item
						extra={
							<Switch
								checked={this.state.checked}
								onChange={() => {
									this.setState({
										checked: !this.state.checked
									});
								}}
							/>
						}
					>
						Off
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch1', {
									initialValue: this.state.checked1,
									valuePropName: 'checked',
									onChange: (val) => {
										console.log(val);
										// Do not `setState` with rc-form
										// this.setState({ checked1: val });
									}
								})}
								onClick={(checked) => {
									// set new value
									this.props.form.setFieldsValue({
										Switch1: checked
									});
								}}
							/>
						}
					>
						On (with rc-form)
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch3', {
									initialValue: false,
									valuePropName: 'checked'
								})}
								onClick={(checked) => {
									console.log(checked);
								}}
								disabled
							/>
						}
					>
						Disabled off
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch4', {
									initialValue: true,
									valuePropName: 'checked'
								})}
								onClick={(checked) => {
									console.log(checked);
								}}
								disabled
							/>
						}
					>
						Disabled on
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch5', {
									initialValue: true,
									valuePropName: 'checked'
								})}
								platform="android"
							/>
						}
					>
						Style for Android
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch6', {
									initialValue: true,
									valuePropName: 'checked'
								})}
								platform="android"
								color="red"
							/>
						}
					>
						Color for Android
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch7', {
									initialValue: true,
									valuePropName: 'checked'
								})}
								platform="ios"
							/>
						}
					>
						Style for iOS
					</List.Item>
					<List.Item
						extra={
							<Switch
								{...getFieldProps('Switch8', {
									initialValue: true,
									valuePropName: 'checked'
								})}
								platform="ios"
								color="red"
							/>
						}
					>
						Color for iOS
					</List.Item>
				</List>
			</div>
		);
	}
}

const Switch1 = createForm()(SwitchExample);

export default Switch1;
