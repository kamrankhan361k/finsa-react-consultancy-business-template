import React from 'react'
import { Link } from 'react-router-dom'

import icon1 from '../../../assets/img/icons/01.png'
import icon2 from '../../../assets/img/icons/02.png'
import icon3 from '../../../assets/img/icons/03.png'
import icon4 from '../../../assets/img/icons/04.png'

const serviceblock = [
    { icon: icon1, title: 'Creative Idea', text: 'Sed perspicia unde omnis' },
    { icon: icon2, title: 'Business Strategy', text: 'Quis autem velrepres hend' },
    { icon: icon3, title: 'Relationship', text: 'Sed perspicia unde omnis' },
    { icon: icon4, title: 'Productivity', text: 'Quis autem velrepres hend' },
]

function Service(props) {
    return (
        <section className="service-section section-gap">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-3 col-sm-6 col-10 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="1s">
                            <div className="service-box-three">
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                <p>{item.text}</p>
                                <Link to="/servicedetail" className="service-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Service;