import React from 'react'
import Slider from 'react-slick'

import quote from '../../../assets/img/icons/quote.png'
import author1 from '../../../assets/img/testimonial/author-8.jpg'

const testimonialslide = [
    { img: author1, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author1, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author1, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author1, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
    { img: author1, name: 'Richard E. Harrisona', post: 'CEO & Founder', comment: 'Sedut perspiciatis unde omniiste natus errorsit voluptatem accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut' },
]
const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow next-arrow" onClick={onClick}><i className="fal fa-long-arrow-right" /></button>
    )
}

const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <button className="slick-arrow prev-arrow" onClick={onClick}><i className="fal fa-long-arrow-left" /></button>
    )
}

function Testimonials(props) {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: true,
        fade: false,
        dots: true,
        dotsClass: "testimonial-dots slick-dots slick-thumb",
        swipe: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: function (i) {
            return (
                <img src={`assets/img/testimonial/thumb/author-${i + 1}.png`} alt="" />
            )
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }],

    }


    return (
        <section className="testimonial-section-two section-gap">
            <div className="container">
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-9">
                        <div className="section-title both-border text-center mb-80">
                            <span className="title-tag">Meet Our Advisors</span>
                            <h2 className="title">We Have An Exclusive<br />Team Member</h2>
                        </div>
                        <Slider className="testimonial-items" id="testimonialSliderTwo" {...settings}>
                            {testimonialslide.map((item, i) => (
                                <div key={i} className="testimonial-item">
                                    <div className="author-img">
                                        <img src={item.img} alt="" />
                                    </div>
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
                                    <div className="author-name">
                                        <h4>{item.name}</h4>
                                        <span>{item.post}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="testimonial-quote-icon">
                <img src={quote} alt="quote" />
            </div>
        </section>
    );
}

export default Testimonials;