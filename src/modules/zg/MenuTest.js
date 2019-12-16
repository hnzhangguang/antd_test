import React, { Component } from 'react';
import { createForm } from 'rc-form';
import {
	Menu,
	NavBar,
	Button,
	Icon,
	Flex,
	WingBlank,
	WhiteSpace,
	Popover,
	Pagination,
	SegmentedControl,
	Tabs,
	Badge,
	TabBar,
	Checkbox,
	Toast,
	List,
	Switch,
	Radio,
	SearchBar,
	TextareaItem,
	Accordion,
	Card,
	Grid,
	Tag,
	Modal
} from 'antd-mobile';
import { directive } from '@babel/types';

// 气泡
const Item = Popover.Item;

// 单选
const RadioItem = Radio.RadioItem;
const Brief = List.Item.Brief;

const myImg = (src) => (
	<img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />
);

/**
 * 练习 Menu 组件:
 * 
 * 练习 NavBar 导航栏组件
 * 
 * Icon 的使用
 * 
 * Flex 的 使用
 * Pagination 分页器的使用
 */
class MenuTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initData: '', // 默认数据
			show: false, // 是否显示
			popoverVisible: false,
			tabBarHidden: false,
			isSwitchOpen: true,
			RadioValue: 0,
			isRadioAgree: false,
			searchKey: '',
			isModalVisbile: false,
			modal2: false
		};
	}
	componentWillMount() {}
	componentDidMount() {
		// this.autoFocusInst.focus();
	}

	dianwo = (param) => {
		console.log(param, '33');
		console.log(param, '33');

		// 保证menu的数据不为空
		if (!this.state.initData) {
			this.setState({ initData: data });
		}

		// 切换显示与否
		this.setState({
			show: !this.state.show
		});
	};

	// index 只是选中的item 的下标
	onChange = (index) => {
		let temp = '';
		this.state.initData.forEach((element, index) => {
			if (element == 22) {
			}
		});
	};

	// Radio change事件
	onRadioChange = () => {
		console.log('result');
		this.setState({ RadioValue: !this.state.RadioValue });
	};

	radioAgree = (e) => {
		console.log('result33', e.target.children, e);
		this.setState({ isRadioAgree: !this.state.isRadioAgree });
	};

	onSearchBarChange = (e) => {
		console.log('onSearchBarChange', e);
		this.setState({ searchKey: e });
	};

	onClearSearchBar = (e) => {
		console.log('result');
		this.setState({ searchKey: '' });
	};

	onCancelSearchBar = (e) => {
		console.log('onCancelSearchBar', e);
		this.setState({ searchKey: '' });
	};

	onSubmitSearchBar = (e) => {
		console.log('onSubmitSearchBar', e);
		alert('onSubmitSearchBar');
	};

	onChangeAccordion = (e) => {
		console.log('onChangeAccordion', e);
	};

	onClickAccordionPanel = (e) => {
		console.log('onClickAccordionPanel', e);
	};

	onClickGrid = (param) => {
		console.log('onClickGrid', param);
	};

	onChangeTag = (param) => {
		console.log('onChangeTag', param);
	};
	onCloseModal = (param) => {
		console.log('onCloseModal', param);
	};
	onClickModalTest = (param) => {
		console.log('onClickModalTest', param);
		this.setState({ isModalVisbile: !this.state.isModalVisbile });
	};
	onclick = () => {
		console.log('result', 'f');
		this.setState({ modal2: !this.state.modal2 });
	};

	onClose = () => {
		console.log('result', '00');
		this.setState({ modal2: !this.state.modal2 });
	};

	render() {
		// 定义一个Menu
		const menuEl = (
			<Menu
				className="single-foo-menu"
				data={this.state.initData}
				value={'1'}
				level={1}
				onChange={this.onChange}
				height={document.documentElement.clientHeight * 0.5}
			/>
		);

		const checkData = [
			{ value: 0, label: 'Ph.D.' },
			{ value: 1, label: 'Bachelor' },
			{ value: 2, label: 'College diploma' }
		];

		const RadioData = [
			{ value: 0, label: 'basketball', extra: 'details' },
			{ value: 1, label: 'football', extra: 'details' }
		];

		const GridData = [
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			},
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			},
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			},
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			},
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			},
			{
				icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
				text: 'namaxxx'
			}
		];

		return (
			<div>
				<div onClick={this.onclick}> 点击test </div>
				<WhiteSpace size="lg" />

				<div onClick={this.onClickModalTest}> modal 点击事件 </div>

				<div> </div>

				<div>
					<Modal
						visible={this.state.isModalVisbile}
						transparent
						animationType="slide-up"
						maskClosable={false}
						title="Title"
						footer={[
							{
								text: 'Ok',
								onPress: () => {
									console.log('ok');
									this.setState({ isModalVisbile: !this.state.isModalVisbile });
								}
							}
						]}
						wrapProps={{ onTouchStart: this.onWrapTouchStart }}
						afterClose={() => {
							console.log('afterClose');
							// alert('afterClose');
						}}
					>
						<div style={{ height: 100, overflow: 'scroll' }}>
							scoll content...<br />
							scoll content...<br />
						</div>
					</Modal>
				</div>

				<WhiteSpace> </WhiteSpace>

				<Button
					onClick={() => {
						Modal.alert('Delete', 'Are you sure???', [
							{ text: 'Cancel', onPress: () => console.log('cancel') },
							{ text: 'Ok', onPress: () => console.log('ok') }
						]);
					}}
				>
					Modal.alert 对象
				</Button>

				<Button
					onClick={() => {
						Modal.prompt(
							'defaultValue',
							'defaultValue for prompt',
							[
								{ text: 'Cancel' },
								{ text: 'Submit', onPress: (value) => console.log(`输入的内容:${value}`) }
							],
							'default',
							'100'
						);
					}}
				>
					Modal.prompt
				</Button>

				<Button
					onClick={() =>
						Modal.prompt(
							'Password',
							'Password Message',
							(password) => console.log(`password: ${password}`),
							'secure-text'
						)}
				>
					Modal.prompt 加密文本
				</Button>

				<Button
					onClick={() =>
						Modal.prompt(
							'Password',
							'You can custom buttons',
							[ { text: '取消' }, { text: '提交', onPress: (password) => console.log(`密码为:${password}`) } ],
							'secure-text'
						)}
				>
					custom buttons
				</Button>

				<Button
					onClick={() =>
						Modal.prompt(
							'Login',
							'Please input login information',
							(login, password) => console.log(`login: ${login}, password: ${password}`),
							'login-password',
							null,
							[ 'Please input name', 'Please input password' ]
						)}
				>
					login-password
				</Button>

				<WhiteSpace size="lg" />

				<hr />

				<div> Tag 标签 </div>

				<div style={{ padding: 20 }}>
					<Tag data-seed="logId">Basic</Tag>
					<Tag selected>Selected</Tag>
					<Tag disabled>Disabled</Tag>
					<Tag onChange={this.onChangeTag}>Callback</Tag>
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
					<Tag small>Small and Readonly</Tag>
				</div>

				<hr />

				<div> List 列表 </div>

				<div>
					<List renderHeader={() => 'Subtitle'} className="my-list">
						<List.Item arrow="horizontal" multipleLine onClick={() => {}}>
							Title <Brief>subtitle</Brief>
						</List.Item>
						<List.Item arrow="horizontal" multipleLine onClick={() => {}} platform="android">
							ListItem （Android）
							<Brief>
								There may have water ripple effect of <br /> material if you set the click event.
							</Brief>
						</List.Item>
						<List.Item
							arrow="horizontal"
							thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
							multipleLine
							onClick={() => {}}
						>
							Title <Brief>subtitle</Brief>
						</List.Item>
					</List>
				</div>

				<WhiteSpace size="lg" />

				<hr />

				<div> Grid 宫格 </div>

				<div>
					<Grid
						data={GridData}
						activeStyle={false}
						square={true}
						columnNum={3}
						hasLine={false}
						isCarousel
						onClick={this.onClickGrid}
					/>
				</div>

				<WhiteSpace size="lg" />

				<div> 自定义grid item </div>
				<Grid
					data={GridData}
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

				<div className="sub-title">Custom GridCell Style</div>
				<Grid data={GridData} columnNum={3} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} />

				<WhiteSpace size="lg" />

				<div>Card 卡片 </div>
				<div>
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
				</div>
				<WhiteSpace size="lg" />
				<hr />
				<div> Badge 徽标数 </div>

				<div>
					<List>
						<List.Item>
							Marketing:
							<Badge text="减" hot style={{ marginLeft: 12 }} />
							<Badge text="惠" hot style={{ marginLeft: 12 }} />
							<Badge text="免" hot style={{ marginLeft: 12 }} />
							<Badge text="反" hot style={{ marginLeft: 12 }} />
							<Badge text="HOT" hot style={{ marginLeft: 12 }} />
						</List.Item>

						<List.Item extra="extra" arrow="horizontal">
							<Badge text={0} style={{ marginLeft: 12 }}>
								Text number 0
							</Badge>
							<Badge text={'new'} style={{ marginLeft: 12 }} />
						</List.Item>
						<List.Item className="special-badge" extra={<Badge text={'促'} />}>
							Custom corner
						</List.Item>

						<List.Item extra="extra content" arrow="horizontal">
							<Badge dot>
								<span
									style={{
										width: '26px',
										height: '26px',
										background: '#ddd',
										display: 'inline-block'
									}}
								/>
							</Badge>
							<span style={{ marginLeft: 12 }}>Dot badge</span>
						</List.Item>
						<List.Item
							thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
							extra={<Badge text={77} overflowCount={55} />}
							arrow="horizontal"
						>
							Content
						</List.Item>
					</List>
				</div>

				<hr />
				<div> Accordion 手风琴</div>
				<div>
					<Accordion defaultActiveKey="10" className="my-accordion" onChange={this.onChangeAccordion}>
						<Accordion.Panel header="Title 1" key="aa">
							<List className="my-list" onClick={this.onClickAccordionPanel}>
								<List.Item>content 1</List.Item>
							</List>
						</Accordion.Panel>
						<Accordion.Panel header="Title 2" className="pad" key="bb">
							this is panel content2 or other
						</Accordion.Panel>
					</Accordion>
				</div>

				<hr />
				<div> TextareaItem 多行输入 </div>

				<div>
					<TextareaItem
						title="title"
						placeholder="auto focus in Alipay client"
						data-seed="logId"
						ref={(el) => (this.autoFocusInst = el)}
						autoHeight
						editable={true}
					/>

					<TextareaItem
						title="title"
						placeholder="auto focus in Alipay client"
						data-seed="logId"
						ref={(el) => (this.autoFocusInst = el)}
						autoHeight
						labelNumber={5}
						editable={false}
					/>
				</div>

				<hr />
				<div> SearchBar 搜索栏 </div>

				<SearchBar
					placeholder="Search"
					maxLength={8}
					value={this.state.searchKey}
					onClear={this.onClearSearchBar}
					onBlur={() => console.log('onBlur')}
					onSubmit={this.onSubmitSearchBar}
					onCancel={this.onCancelSearchBar}
					showCancelButton
					onChange={this.onSearchBarChange}
				>
					{' '}
				</SearchBar>

				<hr />
				<div> Radio 的使用 </div>
				<div>
					<List renderHeader={() => 'RadioItem Brief 的使用 1'}>
						{RadioData.map((i) => (
							<RadioItem
								key={i.value}
								checked={this.state.RadioValue == i.value}
								onChange={() => this.onRadioChange(i.value)}
							>
								{i.label}
								<List.Item.Brief>{i.extra}</List.Item.Brief>
							</RadioItem>
						))}
					</List>
				</div>
				<hr />
				<div>
					<List renderHeader={() => 'RadioItem 的使用'}>
						{RadioData.map((i) => (
							<RadioItem
								key={i.value}
								checked={this.state.RadioValue == i.value}
								onChange={() => this.onRadioChange(i.value)}
							>
								{i.label}
							</RadioItem>
						))}
					</List>
				</div>
				<Flex style={{ padding: '15px' }}>
					<Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>
						Radio demo(dustomized style)
					</Flex.Item>
					<Flex.Item>
						<Radio className="my-radio" checked={this.state.isRadioAgree} onClick={this.radioAgree}>
							Agree
						</Radio>
					</Flex.Item>
				</Flex>
				<hr />
				<div> Switch 的使用 </div>
				<Flex direction="column">
					<Switch
						checked={this.state.isSwitchOpen}
						onChange={() => {
							console.log('isSwitchOpen');
							this.setState({ isSwitchOpen: !this.state.isSwitchOpen });
						}}
						platform="android"
						color="red"
						name="name"
					/>
					<Switch
						checked={this.state.isSwitchOpen}
						onChange={() => {
							console.log('isSwitchOpen');
							this.setState({ isSwitchOpen: !this.state.isSwitchOpen });
						}}
						platform="ios"
						color="green"
					/>
				</Flex>
				<hr />
				<div> Checkbox 复选框 he List 的使用方法 </div>
				<div>
					<List renderHeader={() => 'CheckboxItem demo'}>
						{checkData.map((i, index) => {
							return (
								<CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
									{i.label}
								</CheckboxItem>
							);
						})}

						<CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
							Undergraduate Undergraduate Undergraduate Undergraduate Undergraduate
							<List.Item.Brief>Auxiliary text</List.Item.Brief>{' '}
							<List.Item.Brief>Auxiliary text</List.Item.Brief>{' '}
							<List.Item.Brief>Auxiliary text</List.Item.Brief>
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
					</Flex>{' '}
				</div>
				<hr />
				<div> </div>
				<Button
					type="primary"
					size="small"
					inline={true}
					style={{ width: 100, height: 33 }}
					onClick={this.dianwo.bind(this, '点我了~')}
				>
					点击
				</Button>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => console.log('onLeftClick')}
					rightContent={[
						<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
						<Icon key="1" type="ellipsis" onClick={this.dianwo} />
					]}
				>
					标题aaa
				</NavBar>
				<div>{this.state.show ? menuEl : null}</div>
				<hr />
				<WhiteSpace />
				<WingBlank>
					<div>Flex 的使用</div>
					<Flex direction="row" justify="center" wrap="nowrap">
						<Flex.Item>我是第一个item</Flex.Item>
						<Flex.Item style={{ flex: 2, backgroundColor: '#ff00ff' }}>我是第二个item</Flex.Item>
						<Flex.Item>我是第二个item</Flex.Item>
					</Flex>
				</WingBlank>
				<WhiteSpace />
				<hr />
				<Button onClick={this.onClickPopover}>popover 点击按钮</Button>
				<div>
					<NavBar
						mode="light"
						icon={<Icon type="left" />}
						onLeftClick={() => console.log('onLeftClick')}
						rightContent={
							<Popover
								mask
								visible={this.state.popoverVisible}
								align={{ overflow: { adjustY: 0, adjustX: 0 }, offset: [ -10, 0 ] }}
								onVisibleChange={this.handleVisibleChange}
								onSelect={this.onSelect}
								overlay={[
									<Item key="6" value="buttonct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
										<span style={{ marginRight: 5 }}>Help</span>
									</Item>,
									<Item key="8" value="buttonct2">
										<span style={{ marginRight: 5 }}>Help</span>
									</Item>
								]}
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
									<Icon type="ellipsis" onClick={this.onClickPopover} />
								</div>
							</Popover>
						}
					>
						标题8888
					</NavBar>
				</div>
				<hr />
				<div>Pagination 分页器</div>
				<Pagination
					total={5}
					current={1}
					locale={{
						prevText: (
							<span className="arrow-align">
								<Icon type="left" />上一步
							</span>
						),
						nextText: (
							<span className="arrow-align">
								下一步<Icon type="right" />
							</span>
						)
					}}
				/>
				<Pagination simple total={5} current={1} locale={locale} />
				<Pagination mode="number" total={5} current={3} />
				<Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />
				<hr />
				<div>SegmentedControl 分段器</div>
				<SegmentedControl values={[ 'Segment1', 'Segment2' ]} />
				<SegmentedControl values={[ 'Segment1', 'Segment2' ]} disabled />
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
				<hr />
				<div> Tabs 标签页 </div>
				<Tabs
					tabs={tabs}
					initialPage={1}
					onChange={(tab, index) => {
						console.log('Tabs -> onChange', index, tab);
					}}
					onTabClick={(tab, index) => {
						console.log('Tabs -> onTabClick', index, tab);
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
						Content of Second tab
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
						Content of third tab
					</div>
				</Tabs>
				<hr />
				<div> Toast </div>
				<div
					onClick={() => {
						Toast.success('success...', 1, () => {
							this.setState({ aa: 'aa' });
						});
					}}
				>
					success
				</div>
				<div
					onClick={() => {
						Toast.fail('fail...', 1, () => {
							this.setState({ aa: 'aa' });
						});
					}}
				>
					fail
				</div>
				<div
					onClick={() => {
						Toast.loading('loading...', 1, () => {
							this.setState({ aa: 'aa' });
						});
					}}
				>
					loading
				</div>
				<div
					onClick={() => {
						Toast.info('info...', 1, () => {
							this.setState({ aa: 'aa' });
						});
					}}
				>
					info
				</div>
				<hr />
				<div> TabBar </div>
				{/* <div style={{ height: 400 }}>
					<TabBar
						unselectedTintColor="#949494"
						tintColor="#33A3F4"
						barTintColor="white"
						hidden={this.state.tabBarHidden}
					>
						<TabBar.Item
							title="Life"
							key="Life"
							icon={
								<div
									style={{
										width: '22px',
										height: '22px',
										background:
											'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
									}}
								/>
							}
							selectedIcon={
								<div
									style={{
										width: '22px',
										height: '22px',
										background:
											'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
									}}
								/>
							}
							selected={this.state.selectedTab === 'blueTab'}
							badge={1}
							onPress={() => {
								this.setState({
									selectedTab: 'blueTab'
								});
							}}
							data-seed="logId"
						>
							{this.renderContent('Life')}
						</TabBar.Item>

						<TabBar.Item
							icon={
								<div
									style={{
										width: '22px',
										height: '22px',
										background:
											'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
									}}
								/>
							}
							selectedIcon={
								<div
									style={{
										width: '22px',
										height: '22px',
										background:
											'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
									}}
								/>
							}
							title="Koubei"
							key="Koubei"
							badge={'new'}
							selected={this.state.selectedTab === 'redTab'}
							onPress={() => {
								this.setState({
									selectedTab: 'redTab'
								});
							}}
							data-seed="logId1"
						>
							{this.renderContent('Koubei')}
						</TabBar.Item>
					</TabBar>
				</div> */}
				<hr />
			</div>
		);
	}

	// TabBar 绘制content
	renderContent(pageText) {
		return (
			<div style={{ backgroundColor: 'white', height: 400, textAlign: 'center' }}>
				<div style={{ paddingTop: 60 }}>
					Clicked “{pageText}” tab， show “{pageText}” information
				</div>
				<a
					style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
					onClick={(e) => {
						e.preventDefault();
						this.setState({
							hidden: !this.state.hidden
						});
					}}
				>
					Click to show/hide tab-bar
				</a>
				<a
					style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
					onClick={(e) => {
						e.preventDefault();
						this.setState({
							fullScreen: !this.state.fullScreen
						});
					}}
				>
					Click to switch fullscreen
				</a>
			</div>
		);
	}
	onValueChange = (param) => {
		console.log(param, 'result1');
	};
	onChange = (param) => {
		console.log(param, 'result2');
	};

	// 点击 ... 的时候的点击事件
	onClickPopover = () => {
		this.setState({ popoverVisible: !this.state.popoverVisible });
	};

	// popover chang事件
	handleVisibleChange = (isvisbile) => {
		console.log(isvisbile, 'handleVisibleChange');
	};

	// 选择事件
	onSelect = (item) => {
		console.log(item.key, 'onSelect');
		this.onClickPopover();
	};
}

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const tabs = [ { title: <Badge text={'3'}>First Tab</Badge> }, { title: <Badge dot>Second Tab</Badge> } ];

const tabs2 = [ { title: 'First Tab', sub: '1' }, { title: 'Third Tab', sub: '3' } ];

// 分页器locale
const locale = {
	prevText: 'Prev',
	nextText: 'Next'
};

// 单级菜单数据
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

export default MenuTest;
