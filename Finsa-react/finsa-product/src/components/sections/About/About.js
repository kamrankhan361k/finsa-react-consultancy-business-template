import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/01.png'

function About(props) {

    return (
        <section className="about-section about-illustration-img section-gap">
            <div className="container">
                <div className="illustration-img">
                    <img src={illustration} alt="" />
                </div>
                <div className="row no-gutters justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">About Us</span>
                                <h2 className="title">Professional Business <br /> Guidance Agency </h2>
                            </div>
                            <p className="mb-25">
                                Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremq
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                                </p>
                            <p>
                                Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                                </p>
                            <ul className="about-list">
                                <li> <i className="far fa-check" /> Business &amp; Consulting Agency</li>
                                <li> <i className="far fa-check" /> Awards Winning Business Comapny</li>
                            </ul>
                            <Link to="/about" className="main-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;