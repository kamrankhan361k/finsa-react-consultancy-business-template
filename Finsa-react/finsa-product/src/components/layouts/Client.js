import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import img1 from '../../assets/img/clients/01.png'
import img2 from '../../assets/img/clients/02.png'
import img3 from '../../assets/img/clients/03.png'
import img4 from '../../assets/img/clients/04.png'
import img5 from '../../assets/img/clients/05.png'

const clientslide = [
	{ img: img1 },
	{ img: img2 },
	{ img: img3 },
	{ img: img4 },
	{ img: img5 },
	{ img: img1 },
	{ img: img2 },
	{ img: img3 },
	{ img: img4 },
	{ img: img5 },
]

const settings = {
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 500,
	arrows: false,
	fade: false,
	dots: false,
	swipe: true,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
			},
		},
	],
}
class Client extends Component {
	render() {
		return (
			<Slider className="row align-items-center justify-content-between" id="clientSlider" {...settings}>
				{clientslide.map((item, i) => (
					<div key={i} className="col">
						<Link to="/" className="client-img d-block text-center">
							<img src={item.img} alt="" />
						</Link>
					</div>
				))}
			</Slider>
		);
	}
}

export default Client;