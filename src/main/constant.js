import App from './App'; // 其他出库(杂收)
import Flex from '../modules/layout/flex';
import WingBank1 from '../modules/layout/WingBank1';
import Drawer1 from '../modules/Navigation/Drawer1';
import Menu1 from '../modules/Navigation/Menu1';
import NavBar1 from '../modules/Navigation/NavBar1';
import Popover1 from '../modules/Navigation/Popover1';
import Pagination1 from '../modules/Navigation/Pagination1';
import SegmentedControl1 from '../modules/Navigation/SegmentedControl1';
import Tabs1 from '../modules/Navigation/Tabs1';
import TabBar1 from '../modules/Navigation/TabBar1';
import Button1 from '../modules/DataEntry/Button1';
import Checkbox1 from '../modules/DataEntry/Checkbox1';
import Calendar1 from '../modules/DataEntry/Calendar1';
import DatePicker1 from '../modules/DataEntry/DatePicker1';
import Radio1 from '../modules/DataEntry/Radio1';
import Range1 from '../modules/DataEntry/Range1';
import Switch1 from '../modules/DataEntry/Switch1';
import Stepper1 from '../modules/DataEntry/Stepper1';
import Slider1 from '../modules/DataEntry/Slider1';
import TextareaItem1 from '../modules/DataEntry/TextareaItem1';
import Accordion1 from '../modules/DataDisplay/Accordion1';
import Badge1 from '../modules/DataDisplay/Badge1';
import Carousel1 from '../modules/DataDisplay/Carousel1';
import Card1 from '../modules/DataDisplay/Card1';
import Grid1 from '../modules/DataDisplay/Grid1';
import Icon1 from '../modules/DataDisplay/Icon1';
import List1 from '../modules/DataDisplay/List1';
import NoticeBar1 from '../modules/DataDisplay/NoticeBar1';
import Steps1 from '../modules/DataDisplay/Steps1';
import Tag1 from '../modules/DataDisplay/Tag1';
import ActionSheet1 from '../modules/Feedback/ActionSheet1';
import Modal1 from '../modules/Feedback/Modal1';
import Progress1 from '../modules/Feedback/Progress1';
import Toast1 from '../modules/Feedback/Toast1';
import PullToRefresh1 from '../modules/Gesture/PullToRefresh1';
import SwipeAction1 from '../modules/Gesture/SwipeAction1';
import ListView1 from '../modules/Combination/ListView1';
import Result1 from '../modules/Combination/Result1';
import MenuTest from '../modules/zg/MenuTest';
import ListViewT from '../modules/zg/ListViewT';
import PlayImgApp from '../modules/viewpager/PlayImgApp';
// import ZhangTest from '../modules/zg/ZhangTest';

/**
 * 路由对象
 */
const routerObject = [
	{
		path: '/',
		component: App,
		exact: true,
		name: ''
	},
	{
		path: '/WingBank1',
		component: WingBank1,
		name: 'WingBank1'
	},
	{
		path: '/Drawer1',
		component: Drawer1,
		name: 'Drawer1'
	},
	{
		path: '/Flex',
		component: Flex,
		name: 'Flex'
	},
	{
		path: '/Menu1',
		component: Menu1,
		name: 'Menu1'
	},
	{
		path: '/NavBar1',
		component: NavBar1,
		name: 'NavBar1'
	},
	{
		path: '/Popover1',
		component: Popover1,
		name: 'Popover1'
	},
	{
		path: '/Pagination1',
		component: Pagination1,
		name: 'Pagination1'
	},
	{
		path: '/SegmentedControl1',
		component: SegmentedControl1,
		name: 'SegmentedControl1'
	},
	{
		path: '/Tabs1',
		component: Tabs1,
		name: 'Tabs1'
	},
	{
		path: '/TabBar1',
		component: TabBar1,
		name: 'TabBar1'
	},
	{
		path: '/Button1',
		component: Button1,
		name: 'Button1'
	},
	{
		path: '/Checkbox1',
		component: Checkbox1,
		name: 'Checkbox1'
	},
	{
		path: '/Calendar1',
		component: Calendar1,
		name: 'Calendar1'
	},
	{
		path: '/DatePicker1',
		component: DatePicker1,
		name: 'DatePicker1'
	},
	{
		path: '/Radio1',
		component: Radio1,
		name: 'Radio1'
	},
	{
		path: '/Range1',
		component: Range1,
		name: 'Range1'
	},
	{
		path: '/Switch1',
		component: Switch1,
		name: 'Switch1'
	},
	{
		path: '/Stepper1',
		component: Stepper1,
		name: 'Stepper1'
	},
	{
		path: '/Slider1',
		component: Slider1,
		name: 'Slider1'
	},
	{
		path: '/TextareaItem1',
		component: TextareaItem1,
		name: 'TextareaItem1'
	},
	{
		path: '/Accordion1',
		component: Accordion1,
		name: 'Accordion1'
	},
	{
		path: '/Badge1',
		component: Badge1,
		name: 'Badge1'
	},
	{
		path: '/Carousel1',
		component: Carousel1,
		name: 'Carousel1'
	},
	{
		path: '/Card1',
		component: Card1,
		name: 'Card1'
	},
	{
		path: '/Grid1',
		component: Grid1,
		name: 'Grid1'
	},
	{
		path: '/Icon1',
		component: Icon1,
		name: 'Icon1'
	},
	{
		path: '/List1',
		component: List1,
		name: 'List1'
	},
	{
		path: '/NoticeBar1',
		component: NoticeBar1,
		name: 'NoticeBar1'
	},
	{
		path: '/Steps1',
		component: Steps1,
		name: 'Steps1'
	},
	{
		path: '/Tag1',
		component: Tag1,
		name: 'Tag1'
	},
	{
		path: '/ActionSheet1',
		component: ActionSheet1,
		name: 'ActionSheet1'
	},
	{
		path: '/Modal1',
		component: Modal1,
		name: 'Modal1'
	},
	{
		path: '/Progress1',
		component: Progress1,
		name: 'Progress1'
	},
	{
		path: '/Toast1',
		component: Toast1,
		name: 'Toast1'
	},
	{
		path: '/PullToRefresh1',
		component: PullToRefresh1,
		name: 'PullToRefresh1'
	},
	{
		path: '/SwipeAction1',
		component: SwipeAction1,
		name: 'SwipeAction1'
	},
	{
		path: '/ListView1',
		component: ListView1,
		name: 'ListView1'
	},
	{
		path: '/Result1',
		component: Result1,
		name: 'Result1'
	},
	{
		path: '/MenuTest',
		component: MenuTest,
		name: 'MenuTest'
	},
	{
		path: '/ListViewT',
		component: ListViewT,
		name: 'ListViewT'
	},
	{
		path: '/PlayImgApp',
		component: PlayImgApp,
		name: 'PlayImgApp'
	}
];
export default routerObject;
