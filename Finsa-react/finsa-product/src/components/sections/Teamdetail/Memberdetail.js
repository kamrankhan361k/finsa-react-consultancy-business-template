import React from 'react'
import { Link } from 'react-router-dom'

import memberimg from '../../../assets/img/team/01.jpg'

function Memberdetail(props) {
    return (
        <section className="member-details-wrapper section-gap-top">
            <div className="container">
                <div className="member-details">
                    <div className="member-picture-wrap">
                        <div className="member-picture">
                            <img src={memberimg} alt="" />
                        </div>
                    </div>
                    <div className="member-desc">
                        <h3 className="name">John N. Holmes</h3>
                        <span className="pro">Business Developer</span>
                        <p>
                            Sedut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium
                            totam rem aperiam eaquipsa quae ab illo inventore veritatis
                            </p>
                        <p>
                            Quasi architecto beatae vitae dicta sunt explica boemo enim ipsam volupt
                            </p>
                    </div>
                    <div className="member-contact-info">
                        <h3 className="title">Get In Touch</h3>
                        <span className="title-tag">Contact Me</span>
                        <ul className="contact-info">
                            <li><i className="far fa-phone" /> <strong>+012 (345) 6789</strong></li>
                            <li><Link to="#"><i className="far fa-envelope" /> support@gmail.com</Link></li>
                            <li><i className="far fa-map-marker-alt" /> Broklyn Street USA</li>
                        </ul>
                        <ul className="social-links">
                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                            <li><Link to="#"><i className="fab fa-dribbble" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Memberdetail;