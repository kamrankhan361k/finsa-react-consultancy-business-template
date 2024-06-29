import React from 'react';

function Contact(props) {
    return (
        <section className="contact-section boxed-style-with-map">
            <div className="container">
                <div className="contact-inner mt-negative grey-bg">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="contact-map">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60975.5149935516!2d-73.99735520603153!3d40.7015706118682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1598633530051!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <div className="section-title left-border mb-30">
                                    <span className="title-tag">Drop A Message</span>
                                    <h2 className="title">Don’t Hesited To Contact Us</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Full Name" required />
                                                <span className="icon"><i className="far fa-user-circle" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group mb-30">
                                                <input type="email" placeholder="Your Email Address" required />
                                                <span className="icon"><i className="far fa-envelope-open" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group select mb-30">
                                                <select required>
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
                                                <textarea placeholder="Write Message" defaultValue={""} required />
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
            </div>
        </section>
    );
}

export default Contact;