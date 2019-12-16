import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Card1 extends Component {
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
				<WingBlank size="lg">
					<WhiteSpace size="lg" />
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
					<WhiteSpace size="lg" />
				</WingBlank>
			</div>
		);
	}
}
export default Card1;
