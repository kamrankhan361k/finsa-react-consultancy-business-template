import React from 'react'
import { Link } from 'react-router-dom'

const joblisting = [
    { jobtitle: 'Web Designer', jobtime: 'Full Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
    { jobtitle: 'Web Developer', jobtime: 'Full Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
    { jobtitle: 'SEO Optimization', jobtime: 'Part Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
    { jobtitle: 'IT Marketing', jobtime: 'Full Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
    { jobtitle: 'IT Consultant', jobtime: 'Part Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
    { jobtitle: 'Computer Engineer', jobtime: 'Full Time', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam', btntext: 'apply now' },
]


function Joblist(props) {
    return (
        <section className="job-list-section section-gap grey-bg">
            <div className="container">
                <div className="job-lists">
                    {joblisting.map((item, i) => (
                        <div key={i} className="single-job">
                            <h4 className="title">{item.jobtitle} <span className="job-time">({item.jobtime})</span></h4>
                            <p>{item.text}</p>
                            <Link to="/contact" className="apply-btn">{item.btntext} <i className="far fa-long-arrow-right" /></Link>
                        </div>
                    ))}
                </div>
                <div className="view-btn text-center mt-60">
                    <Link to="/service" className="main-btn">View All Jobs</Link>
                </div>
            </div>
        </section>
    );
}

export default Joblist;