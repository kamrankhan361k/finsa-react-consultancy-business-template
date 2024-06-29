import React from 'react'
import { Link } from 'react-router-dom'

const Jobcategoryblock = [
    { icon: 'flaticon-computer', title: 'It Solutions' },
    { icon: 'flaticon-creative', title: 'It Consulting' },
    { icon: 'flaticon-idea', title: 'Product Design' },
    { icon: 'flaticon-fingerprint', title: 'Server Security' },
    { icon: 'flaticon-shield', title: 'It Management' },
    { icon: 'flaticon-training', title: 'UX/UI Strategy' },
    { icon: 'flaticon-analysis', title: 'IT Marketing' },
    { icon: 'flaticon-piggy-bank', title: 'Bank & Finance' },
]

function Jobcategory(props) {
    return (
        <section className="job-category-section section-gap">
            <div className="container">
                <div className="job-categories">
                    {Jobcategoryblock.map((item, i) => (
                        <div key={i} className="single-cat wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1.1s">
                            <Link to="/contact">
                                <i className={item.icon} />
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Jobcategory;