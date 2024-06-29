import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/04.png'
import line from '../../../assets/img/lines/17.png'

function Banner(props) {
    return (
        <section className="banner-section banner-section-three">
            <div className="banner-slider">
                <div className="single-banner">
                    <div className="container-fluid container-1600">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="banner-content">
                                    <span className="promo-text wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">business &amp; consulting</span>
                                    <h1 className="wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                                        Perfect Agency <br /> For Innovative <br /> Business
                                        </h1>
                                    <ul className="btn-wrap">
                                        <li className="wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                            <Link to="/careers" className="main-btn">Get Started Now</Link>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="700ms">
                                            <Link to="/service" className="main-btn main-btn-3">Our Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7 d-none d-md-block">
                                <div className="banner-img text-right wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="800ms">
                                    <img src={illustration} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-shapes">
                        <div className="one" />
                        <div className="two" />
                        <div className="three" />
                    </div>
                    <div className="banner-line">
                        <img src={line} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;