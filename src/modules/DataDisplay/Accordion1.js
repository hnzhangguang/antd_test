import React, { Component } from 'react';
import { Accordion, List } from 'antd-mobile';
import './Accordion1.css';
import { isNull } from 'util';

/**
 * 手风琴组件的使用
 */
class Accordion1 extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	componentDidMount() {}

	back = () => {
		this.props.history.goBack();
	};

	/**
	 * param 对应的是展开的panel对应的key, 收起来的时候为undefined
	 * 手风琴加 accordion 与不加,是有区别的, onChange事件返回的参数是不同格式的
	 */
	onChangeAccordion = (param) => {
		console.log(param, 'onChangeAccordion');
	};
	onChange = (key) => {
		console.log(key, 'key');
	};
	render() {
		return (
			<div>
				<div onClick={this.back}> 返回 </div>

				<Accordion
					accordion
					openAnimation={{}} // 不需要动画的时候使用
					defaultActiveKey="1" // 默认展开的panel
					className="my-accordion"
					onChange={this.onChangeAccordion}
				>
					<Accordion.Panel header="Title 1">
						<List className="my-list">
							<List.Item>content 1</List.Item>
						</List>
					</Accordion.Panel>
					<Accordion.Panel header="Title 2" className="pad">
						this is panel content2 or other
					</Accordion.Panel>
					<Accordion.Panel header="Title 3" className="pad">
						this is panel content2 or other333
					</Accordion.Panel>
				</Accordion>

				<div style={{ marginTop: 10, marginBottom: 10 }}>
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
				</div>
			</div>
		);
	}
}
export default Accordion1;
