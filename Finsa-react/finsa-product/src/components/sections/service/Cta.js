import React from 'react'
import { Link } from 'react-router-dom'

import ctabg from '../../../assets/img/lines/16.png'

function Cta(props) {
    return (
        <section className="cta-aection">
            <div className="container">
                <div className="cta-wrap mt-negative bg-img-c" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta-content text-center">
                                <div className="section-title both-border mb-30">
                                    <span className="title-tag">Get A Quote</span>
                                    <h2 className="title">Feel Any Project For Business Consulting Get Started Us</h2>
                                </div>
                                <Link to="/contact" className="main-btn main-btn-3">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;