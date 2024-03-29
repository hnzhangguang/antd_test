import React, { Component } from 'react';

import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
const tabs = [
	{ title: <Badge text={'3'}>First Tab</Badge> },
	{ title: <Badge text={'今日(20)'}>Second Tab</Badge> },
	{ title: <Badge dot>Third Tab</Badge> }
];

const tabs2 = [ { title: 'First Tab', sub: '1' }, { title: 'Second Tab', sub: '2' }, { title: 'Third Tab', sub: '3' } ];

class Tabs1 extends Component {
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
				<div onClick={this.back}> 返回 </div>
				<div>
					<Tabs
						tabs={tabs}
						initialPage={1}
						onChange={(tab, index) => {
							console.log('onChange', index, tab);
						}}
						onTabClick={(tab, index) => {
							console.log('onTabClick', index, tab);
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of first tab
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of second tab
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of third tab
						</div>
					</Tabs>
					<WhiteSpace />
					<Tabs
						tabs={tabs2}
						initialPage={1}
						tabBarPosition="bottom"
						renderTab={(tab) => <span>{tab.title}</span>}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of first tab
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of second tab
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								height: '150px',
								backgroundColor: '#fff'
							}}
						>
							Content of third tab
						</div>
					</Tabs>
					<WhiteSpace />
				</div>
			</div>
		);
	}
}
export default Tabs1;
