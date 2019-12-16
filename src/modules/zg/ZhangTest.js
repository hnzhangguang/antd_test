import React, { Component } from 'react';

import { ListView, Button, Flex, Drawer, Menu, NavBar, Tabs, TabBar } from 'antd-mobile';

// 固定写法
const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

/**
 * 自己写代码练习
 */
class ZhangTest extends Component {
	constructor(props) {
		super(props);
		this.state = { listData: [] };
	}
	componentWillMount() {}
	componentDidMount() {}

	onClickButton = (param) => {
		console.log('onClickButton', param);

		const data = [
			{
				id: 1,
				img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
				title: 'Meet hotel',
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 2,
				img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
				title: 'Meet hotel',
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 3,
				img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
				title: "McDonald's invites you",
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 4,
				img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
				title: 'Eat the week',
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 5,
				img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
				title: 'Eat the week',
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 6,
				img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
				title: 'Eat the week',
				des: '不是所有的兼职汪都需要风吹日晒'
			},
			{
				id: 7,
				img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
				title: 'Eat the week',
				des: '不是所有的兼职汪都需要风吹日晒'
			}
		];

		if (this.state.listData.length == 0) {
			this.setState({ listData: data });
		}
	};

	renderRow = (item) => {
		console.log('renderRow', item);

		return (
			<div
				key={item.id}
				style={{ margin: 10 }}
				onClick={() => {
					console.log(item);
				}}
			>
				{item.title} - {item.des}
			</div>
		);
	};

	onEndReached = () => {
		console.log('onEndReached');
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
			<div>
				<Button onClick={this.onClickButton}>按钮</Button>

				<ListView
					dataSource={dataSource.cloneWithRows(this.state.listData)}
					renderRow={this.renderRow}
					renderHeader={() => <span style={{ background: '#ff0000' }}>header</span>}
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

	test = () => {
		console.log('result', 'aaa');

		const menudata = [
			{
				lable: 'lable',
				value: 'value'
			}
		];

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

		const menuEl = (
			<Menu
				className="single-foo-menu"
				data={menudata}
				value={[ '1' ]}
				level={1}
				onChange={this.onChange}
				height={document.documentElement.clientHeight * 0.6}
			/>
		);
		const tabs = [
			{ title: <Badge text={'3'}>First Tab</Badge> },
			{ title: <Badge text={'今日(20)'}>Second Tab</Badge> },
			{ title: <Badge dot>Third Tab</Badge> }
		];

		return (
			<div>
				<Flex direction="column" justify="start" align="center" wrap="nowrap">
					<Flex.Item>
						<div> 我是第一个flex.item </div>
					</Flex.Item>
					<Flex.Item>2222</Flex.Item>
				</Flex>

				{/* wingBlank 我是左右留白组件 */}
				<WingBlank> </WingBlank>
				{/* WhiteSpace我是上下留白 */}
				<WhiteSpace> </WhiteSpace>

				<Drawer sidebar={sidebar} onOpenChange={this.onOpenChange} open={this.state.open}>
					<div>我是main布局内容 </div>
				</Drawer>

				<Menu single mengban data={menudata} />
				<Menu
					className="multi-foo-menu"
					data={initData}
					value={[ '1', [ '3', '4' ] ]}
					onChange={this.onChange}
					onOk={this.onOk}
					onCancel={this.onCancel}
					height={document.documentElement.clientHeight * 0.6}
					multiSelect
				/>

				<NavBar
					icon={<Icon type="ellipsis" />}
					mode="light"
					onLeftClick={this.onLeftClick}
					// rightContent={[
					// 	<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
					// 	<Icon key="1" type="ellipsis" />
					// ]}
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" />
					]}
				>
					title
				</NavBar>
				<NavBar leftContent="Menu" mode="light" onLeftClick={this.handleClick} className="single-top-nav-bar">
					OneLevel menu
				</NavBar>
				<NavBar
					mode="light"
					rightContent={
						<Popover
							mask
							overlayClassName="fortest"
							overlayStyle={{ color: 'currentColor' }}
							visible={this.state.visible}
							overlay={[
								<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">
									Scan
								</Item>,
								<Item
									key="5"
									value="special"
									icon={myImg('PKAgAqZWJVNwKsAJSmXd')}
									style={{ whiteSpace: 'nowrap' }}
								>
									My Qrcode
								</Item>,
								<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
									<span style={{ marginRight: 5 }}>Help</span>
								</Item>
							]}
							align={{
								overflow: { adjustY: 0, adjustX: 0 },
								offset: [ -10, 0 ]
							}}
							onVisibleChange={this.handleVisibleChange}
							onSelect={this.onSelect}
						>
							<div
								style={{
									height: '100%',
									padding: '0 15px',
									marginRight: '-15px',
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Icon type="ellipsis" />
							</div>
						</Popover>
					}
				>
					NavBar
				</NavBar>

				<Popover
					mask
					visible={this.state.visible}
					align={{ overflow: { adjustY: 0, adjustX: 0 }, offset: [ -10, 0 ] }}
					onVisibleChange={this.handleVisibleChange}
					onSelect={this.onSelect}
					overlay={[
						<Item key="6" value="buttonct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
							<span style={{ marginRight: 5 }}>Help</span>
						</Item>
					]}
				/>

				<Pagination simple total={5} current={1} locale={locale} />
				<Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />

				<SegmentedControl values={[ 'Segment1', 'Segment2' ]} />
				<SegmentedControl selectedIndex={1} values={[ 'Segment1', 'Segment2', 'Segment3' ]} />
				<SegmentedControl
					values={[ 'Segment1', 'Segment2', 'Segment3' ]}
					tintColor={'#ff0000'}
					style={{ height: '40px', width: '250px' }}
				/>
				<SegmentedControl
					values={[ 'Segment1', 'Segment2', 'Segment3' ]}
					onChange={this.onChange}
					onValueChange={this.onValueChange}
				/>

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

				<TabBar />

				<List renderHeader={() => 'CheckboxItem demo'}>
					{data.map((i) => (
						<Checkbox.CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
							{i.label}
						</Checkbox.CheckboxItem>
					))}
					<Checkbox.CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
						Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
					</Checkbox.CheckboxItem>
				</List>

				<List renderHeader={() => 'Disabled'}>
					{data.map((i) => (
						<Radio.RadioItem
							key={i.value}
							checked={value3 === i.value}
							onChange={() => this.onChange3(i.value)}
							disabled
						>
							{i.label}
						</Radio.RadioItem>
					))}
					<List.Item
						extra={
							<Switch
								checked={this.state.checked}
								onChange={() => {
									this.setState({
										checked: !this.state.checked
									});
								}}
								platform="android"
								color="red"
							/>
						}
					>
						Off
					</List.Item>
				</List>
				<SearchBar
					value={this.state.value}
					placeholder="Search"
					onSubmit={(value) => console.log(value, 'onSubmit')}
					onClear={(value) => console.log(value, 'onClear')}
					onFocus={() => console.log('onFocus')}
					onBlur={() => console.log('onBlur')}
					onCancel={() => console.log('onCancel')}
					showCancelButton
					onChange={this.onChange}
					ref={(ref) => (this.autoFocusInst = ref)}
				/>
				<TextareaItem
					title="标题"
					placeholder="auto focus in Alipay client"
					data-seed="logId"
					ref={(el) => (this.autoFocusInst = el)}
					autoHeight
				/>
				<Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
					<Accordion.Panel header="Title 1">
						<List className="my-list">
							<List.Item>content 1</List.Item>
							<List.Item>content 2</List.Item>
							<List.Item>content 3</List.Item>
						</List>
					</Accordion.Panel>
					<Accordion.Panel header="Title 2" className="pad">
						this is panel content2 or other
					</Accordion.Panel>
					<Accordion.Panel header="Title 3" className="pad">
						text text text text text text text text text text text text text text text
					</Accordion.Panel>
				</Accordion>
				<List.Item>
					Marketing:
					<Badge text="减" hot style={{ marginLeft: 12 }} />
					<Badge text="惠" hot style={{ marginLeft: 12 }} />
					<Badge text="免" hot style={{ marginLeft: 12 }} />
					<Badge text="反" hot style={{ marginLeft: 12 }} />
					<Badge text="HOT" hot style={{ marginLeft: 12 }} />
				</List.Item>

				<Carousel
					autoplay={false}
					infinite
					beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
					afterChange={(index) => console.log('slide to', index)}
				>
					{this.state.data.map((val) => (
						<a
							key={val}
							href="http://www.alipay.com"
							style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
						>
							<img
								src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
								alt=""
								style={{ width: '100%', verticalAlign: 'top' }}
								onLoad={() => {
									// fire window resize event to change height
									window.dispatchEvent(new Event('resize'));
									this.setState({ imgHeight: 'auto' });
								}}
							/>
						</a>
					))}
				</Carousel>
				<Card>
					<Card.Header
						title="This is title"
						thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
						extra={<span>this is extra</span>}
					/>
					<Card.Body>
						<div>This is content of `Card`</div>
					</Card.Body>
					<Card.Footer content="footer content" extra={<div>extra footer content</div>} />
				</Card>
				<Grid data={data} columnNum={3} />
				<Grid data={data} hasLine={false} />
				<Grid
					data={data1}
					columnNum={3}
					renderItem={(dataItem) => (
						<div style={{ padding: '12.5px' }}>
							<img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
							<div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
								<span>I am title..</span>
							</div>
						</div>
					)}
				/>
				<List renderHeader={() => 'Basic Style'} className="my-list">
					<Item extra={'extra content'}>Title</Item>
				</List>
				<List renderHeader={() => 'Subtitle'} className="my-list">
					<Item arrow="horizontal" multipleLine onClick={() => {}}>
						Title <Brief>subtitle</Brief>
					</Item>
					<Item arrow="horizontal" multipleLine onClick={() => {}} platform="android">
						ListItem （Android）<Brief>
							There may have water ripple effect of <br /> material if you set the click event.
						</Brief>
					</Item>
					<Item
						arrow="horizontal"
						thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
						multipleLine
						onClick={() => {}}
					>
						Title <Brief>subtitle</Brief>
					</Item>
				</List>

				<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
					Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National
					Day.
				</NoticeBar>
				<Tag selected>Selected</Tag>
				<Tag disabled>Disabled</Tag>
				<Tag onChange={onChange}>Callback</Tag>
				<Tag
					closable
					onClose={() => {
						console.log('onClose');
					}}
					afterClose={() => {
						console.log('afterClose');
					}}
				>
					Closable
				</Tag>

				<Modal
					popup
					visible={this.state.modal2}
					onClose={this.onClose('modal2')}
					animationType="slide-up"
					afterClose={() => {
						alert('afterClose');
					}}
				>
					<List renderHeader={() => <div>委托买入</div>} className="popup-list">
						{[ '股票名称', '股票代码', '买入价格' ].map((i, index) => <List.Item key={index}>{i}</List.Item>)}
						<List.Item>
							<Button type="primary" onClick={this.onClose('modal2')}>
								买入
							</Button>
						</List.Item>
					</List>
				</Modal>
			</div>
		);
	};

	showToast() {
		Toast.info('This is a toast tips !!!', 1);
		Toast.info('Toast without mask !!!', 2, null, false);
		Toast.info(
			'00',
			1,
			() => {
				this.setState({ aa: 'aa' });
			},
			false
		);
	}
}

export default ZhangTest;
