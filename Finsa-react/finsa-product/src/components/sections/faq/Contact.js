import React from 'react'

import illustration from '../../../assets/img/illustration/man-with-earth.png'


function Contact(props) {
    return (
        <section className="contact-section with-illustration-img grey-bg section-gap">
            <div className="container">
                <div className="row no-gutters justify-content-end">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">Drop A Message</span>
                                <h2 className="title">Don’t Hesited To Contact Us</h2>
                            </div>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-group mb-30">
                                            <input type="text" placeholder="Your Full Name" />
                                            <span className="icon"><i className="far fa-user-circle" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-group mb-30">
                                            <input type="email" placeholder="Your Email Address" />
                                            <span className="icon"><i className="far fa-envelope-open" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group select mb-30">
                                            <select>
                                                <option value={0}>Subject</option>
                                                <option value={1}>Creative Idea</option>
                                                <option value={2}>Relationship</option>
                                                <option value={3}>Business Strategy</option>
                                                <option value={4}>Productivity</option>
                                                <option value={5}>It Solutions</option>
                                                <option value={5}>Product Design</option>
                                            </select>
                                            <span className="icon"><i className="far fa-angle-down" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group textarea mb-30">
                                            <textarea placeholder="Write Message" defaultValue={""} />
                                            <span className="icon"><i className="far fa-pencil" /></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="main-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="illustration-img">
                <img src={illustration} alt="" />
            </div>
        </section>
    );
}

export default Contact;