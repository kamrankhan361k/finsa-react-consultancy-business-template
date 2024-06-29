import React from 'react'
import { Link } from 'react-router-dom'

import line1 from '../../../assets/img/lines/12.png'
import line2 from '../../../assets/img/lines/11.png'

const serviceblock = [
    { icon: 'flaticon-chart', title: 'Creative Idea' },
    { icon: 'flaticon-graph-1', title: 'Marketing Strategy' },
    { icon: 'flaticon-diagram', title: 'UX/UI Strategy' },
    { icon: 'flaticon-money', title: 'Financial Plan' },
    { icon: 'flaticon-diamond', title: 'Design Strategy' },
    { icon: 'flaticon-teamwork-1', title: 'Relationship' },
    { icon: 'flaticon-setup', title: 'Market Analysis' },
    { icon: 'flaticon-pie-chart', title: 'Online Support' },
]

function Service(props) {
    return (
        <section className="service-section shape-style-two service-line-shape section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">Comany Services</span>
                    <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-3 col-sm-6 col-10 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1000ms">
                            <div className="service-box-two text-center">
                                <div className="icon">
                                    <i className={item.icon} />
                                </div>
                                <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                <Link to="/servicedetail" className="service-link">
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="line-one">
                <img src={line1} alt="line-shape" />
            </div>
            <div className="line-two">
                <img src={line2} alt="line-shape" />
            </div>
        </section>
    );
}

export default Service;