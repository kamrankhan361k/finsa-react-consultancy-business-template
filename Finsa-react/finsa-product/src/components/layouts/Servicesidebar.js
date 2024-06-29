import React from 'react'
import { Link } from 'react-router-dom'

import ctabg from '../../assets/img/sidebar/cta.jpg'

const servicelist = [
    { title: 'Financial Planning' },
    { title: 'Relationship Buildup' },
    { title: 'Investement Planning' },
    { title: 'Marketing Strategy' },
    { title: 'Product Strategy' },
]

export default () => {

    return (
        <div className="sidebar">
            {/* Services List Widget */}
            <div className="widget cat-widget">
                <h4 className="widget-title">All Service List</h4>
                <ul>
                    {servicelist.map((item, i) => (
                        <li key={i}>
                            <Link to="/servicedetail">Financial Planning <span><i className="far fa-angle-right" /></span></Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Contact Widget */}
            <div className="widget contact-widget">
                <h4 className="widget-title">Conatct Us</h4>
                <form action="#">
                    <input type="text" placeholder="Your Email" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="main-btn main-btn-3">Send Message</button>
                </form>
            </div>
            {/* CTA Widget */}
            <div className="widget cta-widget" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                <h4 className="title">Need Any Consultations</h4>
                <Link to="/contact" className="main-btn">Send Message</Link>
            </div>
        </div>
    )
}