import React, { useRef } from 'react'
import Slider from 'react-slick'

import testimonial from '../../../assets/img/testimonial/testimonial.png'
import testimonialauthor from '../../../assets/img/testimonial/author.png'

const testimonialslide = [
    { img: testimonialauthor, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'On the other hand we denounce with righteou indg ation and dislike men who are so beguiled and demoraliz ed by the charms of pleasure of the moment /n the moment' },
    { img: testimonialauthor, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'On the other hand we denounce with righteou indg ation and dislike men who are so beguiled and demoraliz ed by the charms of pleasure of the moment /n the moment' },
    { img: testimonialauthor, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'On the other hand we denounce with righteou indg ation and dislike men who are so beguiled and demoraliz ed by the charms of pleasure of the moment /n the moment' },
]

function Testimonials(props) {
    const sliderRef = useRef()

    const next = () => {
        sliderRef.current.slickNext()
    }
    const previous = () => {
        sliderRef.current.slickPrev()
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: false,
        swipe: true,
    }
    return (
        <section className="testimonial-section grey-bg">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-start">
                    <div className="col-lg-6 col-md-10 offset-lg-5">
                        <div className="section-title left-border">
                            <span className="title-tag">Meet Our Advisors</span>
                            <h2 className="title">We Have An Exclusive <br /> Team Member</h2>
                        </div>
                        <Slider className="testimonial-items" ref={sliderRef} id="testimonialSliderOne" {...settings}>
                            {testimonialslide.map((item, i) => (
                                <div key={i} className="testimonial-item">
                                    <div className="content">
                                        <p>
                                            <span className="quote-top">
                                                <i className="fas fa-quote-left" />
                                            </span>
                                            {item.comment}
                                            <span className="quote-bottom">
                                                <i className="fas fa-quote-right" />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="author">
                                        <div className="thumb">
                                            <img src={item.img} alt="img" />
                                        </div>
                                        <div className="desc">
                                            <h4>{item.name}</h4>
                                            <span>{item.post}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="testimonial-arrows row">
                            <div className="col-12 order-1"><button className="slick-arrow next-arrow" onClick={next}><i className="fal fa-long-arrow-right" /></button></div>
                            <div className="col-12 order-2"><button className="slick-arrow prev-arrow" onClick={previous}><i className="fal fa-long-arrow-left" /></button></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials img */}
            <div className="testimonial-img">
                <img src={testimonial} alt="" />
            </div>
        </section>
    );
}

export default Testimonials;