import React, { Component } from 'react';

import { ListView } from 'antd-mobile';

// 固定写法
const dataSource = new ListView.DataSource({
	rowHasChanged: (row1, row2) => row1 !== row2 // 固定写法
});

const data = [
	{
		img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
		title: 'Meet hotel',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
		title: 'Meet hotel',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
		title: "McDonald's invites you",
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		title: 'Eat the week',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		title: 'Eat the week',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		title: 'Eat the week',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		title: 'Eat the week',
		des: '不是所有的兼职汪都需要风吹日晒'
	}
];

/**
 * listview的练习使用
 */
class ListViewT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: []
		};
	}
	componentWillMount() {}
	componentDidMount() {
		if (this.state.listData.length == 0) {
			this.setState({ listData: data });
		}
	}

	onEndReached = (e) => {
		console.log('onEndReached', e);
	};

	renderRow = (item) => {
		console.log(item);
		return (
			<div style={{ margin: 10 }}>
				{item.title} - {item.des}
			</div>
		);
	};

	render() {
		const separator = (sectionID, rowID) => (
			<div
				key={`${sectionID}-${rowID}`}
				style={{
					backgroundColor: '#F5F5F9',
					height: 8,
					borderTop: '1px solid #ECECED',
					borderBottom: '1px solid #ECECED'
				}}
			/>
		);

		return (
			<div style={{ background: '#1666' }}>
				<ListView
					dataSource={dataSource.cloneWithRows(this.state.listData)}
					renderRow={this.renderRow}
					renderHeader={() => <span style={{ background: '#ff9900' }}>header</span>}
					renderFooter={() => <div> dss </div>}
					renderSeparator={separator}
					pageSize={10}
					onEndReached={this.onEndReached}
					onEndReachedThreshold={10}
					style={{ height: document.documentElement.clientHeight * 0.5, overflow: 'auto' }}
				/>
			</div>
		);
	}
}
export default ListViewT;
