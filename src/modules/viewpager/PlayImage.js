import React, { Component } from 'react';

import image1 from '../../public/assets/icon_lg01.png';

import image2 from '../../public/assets/icon_lg02.png';

import image3 from '../../public/assets/icon_lg03.png';

import image4 from '../../public/assets/icon_lg04.png';

class PlayImage extends Component {
	render() {
		let images = [ image1, image2, image3, image4 ];

		// const src = 'img/' + this.props.num + '.jpg';

		return (
			<div>
				<img className="graph" src={images[this.props.num]} />
				<img src={image3} />
			</div>
		);
	}
}

export default PlayImage;
