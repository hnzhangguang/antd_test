import React, { Component } from 'react';

import { Pagination, Icon } from 'antd-mobile';

const locale = {
	prevText: 'Prev',
	nextText: 'Next'
};

/**
 * Pagination 分页器
        分隔长列表，每次只加载一个页面。
    规则#
        当加载/渲染所有数据将花费很多时间或者流量时使用
 */
class Pagination1 extends Component {
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
			<div className="pagination-container">
				<div onClick={this.back}> 返回 </div>
				<p className="sub-title">Button with text</p>
				<Pagination total={5} current={1} locale={locale} />

				<p className="sub-title">Button with text and icon</p>
				<Pagination
					total={5}
					className="custom-pagination-with-icon"
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

				<p className="sub-title">Hide number</p>
				<Pagination simple total={5} current={1} locale={locale} />

				<p className="sub-title">Show number only</p>
				<Pagination mode="number" total={5} current={3} />

				<p className="sub-title">Point style</p>
				<Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />
			</div>
		);
	}
}
export default Pagination1;
