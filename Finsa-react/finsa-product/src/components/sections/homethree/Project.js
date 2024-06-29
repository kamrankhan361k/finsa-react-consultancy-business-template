import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/project/01.jpg'
import img2 from '../../../assets/img/project/07.jpg'
import img3 from '../../../assets/img/project/08.jpg'
import img4 from '../../../assets/img/project/06.jpg'

function Project(props) {
    return (
        <section className="project-section-two section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title */}
                        <div className="section-title text-center">
                            <span className="title-tag">Latest Project</span>
                            <h2 className="title">We Complate Much More<br />Latest Project</h2>
                        </div>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="row project-boxes mt-80 masonary-layout align-items-center">
                    <div className="col-lg-4 col-sm-6 order-2 order-lg-1">
                        <div className="project-box wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="project-thumb">
                                <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + img1 + ")" }} />
                            </div>
                            <div className="project-desc text-center">
                                <h4><Link to="/portfoliodetail">Free Consulting</Link></h4>
                                <p>Join us for consultatoins</p>
                                <Link to="/portfoliodetail" className="project-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 order-1 order-lg-2">
                        <div className="project-box wide-box wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
                            <div className="project-thumb">
                                <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + img2 + ")" }} />
                            </div>
                            <div className="project-desc text-center">
                                <h4><Link to="/portfoliodetail">How To Build Your Business</Link></h4>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
                                <Link to="/portfoliodetail" className="project-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 order-4 order-lg-3">
                        <div className="project-box wide-box wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="600ms">
                            <div className="project-thumb">
                                <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + img3 + ")" }} />
                            </div>
                            <div className="project-desc text-center">
                                <h4><Link to="/portfoliodetail">Management Corporate Office</Link></h4>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio</p>
                                <Link to="/portfoliodetail" className="project-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 order-3 order-lg-4">
                        <div className="project-box wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="700ms">
                            <div className="project-thumb">
                                <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + img4 + ")" }} />
                            </div>
                            <div className="project-desc text-center">
                                <h4><Link to="/portfoliodetail">Business Monitor</Link></h4>
                                <p>Join us for consultatoins</p>
                                <Link to="/portfoliodetail" className="project-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-more-btn text-center mt-50">
                    <Link to="/portfolio" className="main-btn main-btn-3">View All Project</Link>
                </div>
            </div>
        </section>
    );
}

export default Project;