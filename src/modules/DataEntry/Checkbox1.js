import React, { Component } from 'react';

import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Checkbox1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}
	onChange = (val) => {
		console.log(val);
	};
	back = () => {
		this.props.history.goBack();
	};
	render() {
		const data = [
			{ value: 0, label: 'Ph.D.' },
			{ value: 1, label: 'Bachelor' },
			{ value: 2, label: 'College diploma' }
		];

		return (
			<div>
				<div onClick={this.back}> 返回 </div>
				<List renderHeader={() => 'CheckboxItem demo'}>
					{data.map((i) => (
						<CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
							{i.label}
						</CheckboxItem>
					))}
					<CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
						Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
					</CheckboxItem>
				</List>

				<Flex>
					<Flex.Item>
						<AgreeItem data-seed="logId" onChange={(e) => console.log('checkbox', e)}>
							Agree{' '}
							<a
								onClick={(e) => {
									e.preventDefault();
									alert('agree it');
								}}
							>
								agreement
							</a>
						</AgreeItem>
					</Flex.Item>
					<Flex.Item>
						<AgreeItem data-seed="logId" onChange={(e) => console.log('checkbox', e)}>
							Agree{' '}
							<a
								onClick={(e) => {
									e.preventDefault();
									alert('agree it');
								}}
							>
								agreement
							</a>
						</AgreeItem>
					</Flex.Item>
				</Flex>
			</div>
		);
	}
}
export default Checkbox1;
