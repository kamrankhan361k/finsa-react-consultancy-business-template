import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import img1 from '../../../assets/img/shop/01.png'
import img2 from '../../../assets/img/shop/02.png'
import img3 from '../../../assets/img/shop/03.png'
import img4 from '../../../assets/img/shop/04.png'
import img5 from '../../../assets/img/shop/05.png'
import img6 from '../../../assets/img/shop/06.png'
import img7 from '../../../assets/img/shop/07.png'
import img8 from '../../../assets/img/shop/08.png'

const shopbox = [
    { img: img1, title: 'Smart Man Jacket', price: '25.59' },
    { img: img2, title: 'Smart Man Jacket', price: '25.59' },
    { img: img3, title: 'Smart Man Jacket', price: '25.59' },
    { img: img4, title: 'Smart Man Jacket', price: '25.59' },
    { img: img5, title: 'Smart Man Jacket', price: '25.59' },
    { img: img6, title: 'Smart Man Jacket', price: '25.59' },
    { img: img7, title: 'Smart Man Jacket', price: '25.59' },
    { img: img8, title: 'Smart Man Jacket', price: '25.59' },
]

function Relatedproducts(props) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        ],
    }
    return (
        <div className="related-product">
            <h2 className="related-title">Related Products</h2>
            <Slider className="product-loop related-product-slider row" {...settings}>
                {shopbox.map((item, i) => (
                    <div key={i} className="col-lg-12">
                        <div className="single-product">
                            <div className="product-img">
                                <img src={item.img} alt="" />
                                <div className="product-action">
                                    <Link to="#"><i className="far fa-shopping-cart" /></Link>
                                    <Link to="#"><i className="far fa-heart" /></Link>
                                    <Link to="#"><i className="far fa-eye" /></Link>
                                </div>
                            </div>
                            <div className="product-desc">
                                <ul className="rating">
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star-half" /> </li>
                                    <li> <i className="fas fa-star-half" /> </li>
                                </ul>
                                <h5 className="title"><Link to="/shopdetail">{item.title}</Link></h5>
                                <span className="price">${item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Relatedproducts;