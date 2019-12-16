import React, { Component } from 'react';

import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

/**
 * NoticeBar 通告栏
        在导航栏下方，一般用作系统提醒、活动提醒等通知。
    规则#
        需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。
 */
class NoticeBar1 extends Component {
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
				<WhiteSpace size="lg" />
				<NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
					Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National
					Day.
				</NoticeBar>
				<WhiteSpace size="lg" />
				<NoticeBar mode="link" onClick={() => alert('1')}>
					Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National
					Day.
				</NoticeBar>
				<WhiteSpace size="lg" />
				<NoticeBar mode="closable" icon={null}>
					Remove the default icon.
				</NoticeBar>
				<WhiteSpace size="lg" />
				<NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
					Customized icon.
				</NoticeBar>
				<WhiteSpace size="lg" />
				<NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
					Closable demo for `actionText`.
				</NoticeBar>
				<WhiteSpace size="lg" />
				<NoticeBar mode="link" action={<span>去看看</span>}>
					Link demo for `actionText`.
				</NoticeBar>
			</div>
		);
	}
}
export default NoticeBar1;
