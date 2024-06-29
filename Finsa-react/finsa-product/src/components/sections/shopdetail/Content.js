import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Tab, Nav } from 'react-bootstrap'
import Relatedproducts from './Relatedproducts'

import img1 from '../../../assets/img/shop/product-details-01.jpg'
import img2 from '../../../assets/img/shop/product-details-02.jpg'
import img3 from '../../../assets/img/shop/product-details-03.jpg'

import comment1 from '../../../assets/img/testimonial/author.png'
import comment2 from '../../../assets/img/testimonial/author-4.png'
import comment3 from '../../../assets/img/testimonial/author-3.png'

const productslider = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
]

function SampleNextArrow(props) {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}


function Content(props) {
    const [clicks, setClicks] = useState(1)

    const oncrementItem = () => {
        setClicks(prev => prev + 1)
    }

    const decreaseItem = () => {
        if (clicks < 1) {
            setClicks(0)
        } else {
            setClicks(prev => prev - 1)
        }
    }

    const handleChange = (event) => {
        setClicks(event.target.value)
    }

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: true,
        dotsClass: "product-gallery-arrow slick-dots slick-thumb",
        customPaging: function (i) {
            return (
                <img src={`assets/img/shop/details-thumb-0${i + 1}.jpg`} alt="" />
            )
        },
    }
    return (
        <section className="shop-details-wrap">
            <div className="container">
                <div className="product-details section-gap">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="product-gallery clearfix">
                                <div className="product-gallery-arrow" />
                                <div className="gallery-slider-warp">
                                    <Slider className="product-gallery-slider" {...settings}>
                                        {productslider.map((item, i) => (
                                            <div key={i} className="single-gallery-itam">
                                                <img src={item.img} alt="" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-summary">
                                <h3 className="product-name">University Bags</h3>
                                <ul className="rating">
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star" /> </li>
                                    <li> <i className="fas fa-star-half" /> </li>
                                </ul>
                                <span className="price">$89.00</span>
                                <div className="short-description">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem
                                        que laudantium, totam rem aperiaaquipsa quae ab illo inventore veritatis
                                    </p>
                                    <p>
                                        Perspiciatis unde omnis iste sit voluptatem accusantium dolorem que laudantium,
                                        totam rem aperiaaquipsa quae ab illo
                                    </p>
                                </div>
                                <div className="add-to-cart-form">
                                    <form action="#">
                                        <div className="quantity-input">
                                            <div className="quantity-down" id="quantityDown" onClick={decreaseItem}>
                                                <i className="fal fa-minus" />
                                            </div>
                                            <input id="quantity" disabled type="text" value={clicks} onChange={handleChange} name="quantity" />
                                            <div className="quantity-up" id="quantityUP" onClick={oncrementItem}>
                                                <i className="fal fa-plus" />
                                            </div>
                                        </div>
                                        <div className="add-to-cart-btn">
                                            <button type="submit">Add To Cart</button>
                                        </div>
                                    </form>
                                </div>
                                <ul className="product-share">
                                    <li className="title">Share Now:</li>
                                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="product-details-tab">
                                <Tab.Container defaultActiveKey="description">
                                    <div className="tab-filter-nav">
                                        <Nav variant="tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="description">Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="addinfo">Additional information</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="reviews">Reviews (3)</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="description">
                                            <div className="product-description">
                                                <p>
                                                    Sorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur xcepteur sint occaecat cupidatat non
                                                    proident, sunt.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
                                                    turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis
                                                    sollicitudinInteger in mauris eu nibh euismod gravida. Duis ac tellus et
                                                    risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut
                                                    ullamcorper,
                                                </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="addinfo">
                                            <div className="additional-info">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Weight</th>
                                                            <td>6.59 kg</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dimensions</th>
                                                            <td>43.31 x 26.70 x 64.50 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Color</th>
                                                            <td>Red, Black, Blue</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="reviews">
                                            <div className="product-review">
                                                <ul className="review-list">
                                                    <li className="single-review">
                                                        <div className="review-thumb">
                                                            <img src={comment1} alt="" />
                                                        </div>
                                                        <div className="review-content">
                                                            <h5 className="name">Jon Doe</h5>
                                                            <ul className="review-rating">
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star-half" /> </li>
                                                            </ul>
                                                            <p>
                                                                Harum quidem rerum facilis est et expedita distinctio. Nam
                                                                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                                impedit quo minus id quod maxime
                                                                Harum quidem rerum facilis est et expedita distinctio. Nam
                                                                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                                impedit quo minus id quod maxime
                                                            </p>
                                                        </div>
                                                        <ul className="children">
                                                            <li>
                                                                <div className="review-thumb">
                                                                    <img src={comment2} alt="" />
                                                                </div>
                                                                <div className="review-content">
                                                                    <h5 className="name">Jon Doe</h5>
                                                                    <ul className="review-rating">
                                                                        <li> <i className="fas fa-star" /> </li>
                                                                        <li> <i className="fas fa-star" /> </li>
                                                                        <li> <i className="fas fa-star" /> </li>
                                                                        <li> <i className="fas fa-star" /> </li>
                                                                        <li> <i className="fas fa-star-half" /> </li>
                                                                    </ul>
                                                                    <p>
                                                                        Harum quidem rerum facilis est et expedita distinctio.
                                                                        Nam libero tempore, cum soluta nobis est eligendi optio
                                                                        cumque nihil impedit quo minus id quod maxime
                                                                        Harum quidem rerum facilis est et expedita distinctio.
                                                                        Nam libero tempore, cum soluta nobis est eligendi optio
                                                                        cumque nihil impedit quo minus id quod maxime
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="single-review">
                                                        <div className="review-thumb">
                                                            <img src={comment3} alt="" />
                                                        </div>
                                                        <div className="review-content">
                                                            <h5 className="name">Jon Doe</h5>
                                                            <ul className="review-rating">
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star" /> </li>
                                                                <li> <i className="fas fa-star-half" /> </li>
                                                            </ul>
                                                            <p>
                                                                Harum quidem rerum facilis est et expedita distinctio. Nam
                                                                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                                                impedit quo minus id quod maxime Harum quidem rerum facilis est
                                                                et expedita distinctio. Nam libero tempore, cum soluta nobis est
                                                                eligendi optio cumque nihil impedit quo minus id quod maxime
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
                <Relatedproducts />
            </div>
        </section>
    );
}

export default Content;