import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/project/01.jpg'
import img2 from '../../../assets/img/project/02.jpg'
import img3 from '../../../assets/img/project/03.jpg'
import img4 from '../../../assets/img/project/04.jpg'
import img5 from '../../../assets/img/project/05.jpg'
import img6 from '../../../assets/img/project/06.jpg'

const porfolioblock = [
    { img: img1, title: 'Free Consulting', text: 'Join us for consultatoins' },
    { img: img2, title: 'How To Business', text: 'Join us for consultatoins' },
    { img: img3, title: 'Design Strategy', text: 'Join us for consultatoins' },
    { img: img4, title: 'Research Strategy', text: 'Join us for consultatoins' },
    { img: img5, title: 'IT Consultations', text: 'Join us for consultatoins' },
    { img: img6, title: 'Business Monitor', text: 'Join us for consultatoins' },


]

function Project(props) {
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        {/* Section Title */}
                        <div className="section-title left-border">
                            <span className="title-tag">Latest Project</span>
                            <h2 className="title">We Complate Much More Latest Project</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                        <div className="view-moore-btn text-md-right mt-30 mt-md-0">
                            <Link to="/portfolio" className="main-btn">View More Project</Link>
                        </div>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="row project-boxes mt-80 justify-content-center">
                    {porfolioblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-sm-6">
                            <div className="project-box">
                                <div className="project-thumb">
                                    <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                </div>
                                <div className="project-desc text-center">
                                    <h4><Link to="/portfoliodetail">{item.title}</Link></h4>
                                    <p>{item.text}</p>
                                    <Link to="/portfoliodetail" className="project-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;