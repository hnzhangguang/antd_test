import React, { Component } from 'react';
import { Flex, WhiteSpace, Button } from 'antd-mobile';
import './flex.less';

// 函数式组件
const PlaceHolder = ({ className = '', ...restProps }) => {
	return (
		<div className={`${className} placeholder`} {...restProps}>
			Block
		</div>
	);
};
const tempojb = () => {
	return (
		<div>
			<Button>我是一个button</Button>
		</div>
	);
};

/**
 *   Flex布局
 *  属性:
 *  direction   项目定位方向,值可以为 row , row-reverse, column, column-reverse
 *  wrap        子元素的换行方式, 可选 nowrap,wrap, wrap-reverse
 *  justify     子元素在主轴上的对齐方式, 可选 start, end, center, , between, around
 *  align       子元素在交叉轴上的对齐方式, 可选 start, center, end,baseline,stretch
 *  
 */
class Flex1 extends Component {
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
			<div className="flex-container">
				<div className="sub-title" onClick={this.back}>
					返回
				</div>
				<div className="sub-title">基本</div>
				<Flex>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<Button>我是一个button</Button>
					</Flex.Item>
				</Flex>
				<WhiteSpace size="lg" />
				<div className="sub-title"> direction:Flex定位方向-> 可选值有row,row-reverse,column,column-reverse</div>
				<Flex>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
				</Flex>
				<WhiteSpace size="lg" />
				<Flex>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
					<Flex.Item>
						<PlaceHolder />
					</Flex.Item>
				</Flex>
				<WhiteSpace size="lg" />

				<div className="sub-title">wrap -> 子元素的换行方式 nowrap,wrap,wrap-reverse</div>
				<Flex wrap="wrap">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
				</Flex>
				<WhiteSpace size="lg" />

				<div className="sub-title">justify:子元素在主轴上的对齐方式 start,end,center,between,around</div>
				<Flex justify="center">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
				</Flex>
				<WhiteSpace />
				<Flex justify="end">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
				</Flex>
				<WhiteSpace />
				<Flex justify="between">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline" />
				</Flex>

				<div className="sub-title">align:子元素在交叉轴上的对齐方式 start,center,end,baseline,stretch</div>

				<WhiteSpace />
				<Flex align="start">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline small" />
					<PlaceHolder className="inline" />
				</Flex>
				<WhiteSpace />
				<Flex align="end">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline small" />
					<PlaceHolder className="inline" />
				</Flex>
				<WhiteSpace />
				<Flex align="baseline">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline small" />
					<PlaceHolder className="inline" />
				</Flex>

				<Flex direction="column">
					<PlaceHolder className="inline" />
					<PlaceHolder className="inline small" />
					<PlaceHolder className="inline" />
				</Flex>
			</div>
		);
	}
}
export default Flex1;
