import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/feature/01.jpg'
import img2 from '../../../assets/img/feature/02.jpg'
import img3 from '../../../assets/img/feature/03.jpg'
import img4 from '../../../assets/img/feature/04.jpg'
import img5 from '../../../assets/img/feature/05.jpg'
import img6 from '../../../assets/img/feature/06.jpg'

const featuresblock = [
    { img: img1, title: 'Free Consulting', text: 'Join us for consultatoins' },
    { img: img2, title: 'Business Growth', text: 'Join us for consultatoins' },
    { img: img3, title: 'IT Consulting', text: 'Join us for consultatoins' },
    { img: img4, title: 'Investment Plan', text: 'Join us for consultatoins' },
    { img: img5, title: 'Financial Planning', text: 'Join us for consultatoins' },
    { img: img6, title: 'Relationship', text: 'Join us for consultatoins' },
]

function Features(props) {
    return (
        <section className="feature-section section-gap grey-bg">
            <div className="container">
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag"> Popular Service</span>
                    <h2 className="title">Our Awesome Services To <br /> Grow Your Business</h2>
                </div>
                {/* Feature boxes */}
                <div className="feature-boxes row justify-content-center">
                    {featuresblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-10 col-tiny-12">
                            <div className="feature-box">
                                <div className="feature-bg bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                </div>
                                <div className="feature-desc">
                                    <Link to="/servicedetail" className="feature-link"><i className="fal fa-long-arrow-right" /></Link>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;