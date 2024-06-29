import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/project/05.jpg'
import img2 from '../../../assets/img/project/03.jpg'
import img3 from '../../../assets/img/project/14.jpg'
import img4 from '../../../assets/img/project/02.jpg'
import img5 from '../../../assets/img/project/10.jpg'
import img6 from '../../../assets/img/project/11.jpg'
import img7 from '../../../assets/img/project/01.jpg'
import img8 from '../../../assets/img/project/12.jpg'
import img9 from '../../../assets/img/project/13.jpg'

const filtersbtn = [
    { name: "All Project", value: "All Project", isActive: true },
    { name: "Business", value: "Business", isActive: false },
    { name: "Finaance", value: "Finaance", isActive: false },
    { name: "Development", value: "Development", isActive: false },
    { name: "Consulting", value: "Consulting", isActive: false },
    { name: "Web", value: "Web", isActive: false },
    { name: "Server", value: "Server", isActive: false },
]

const projects = [
    {
        photo: img1,
        origin: ["Business", "Consulting"],
        title: 'Free Consulting',
        text: 'Join us for consultatoins',
    },
    {
        photo: img2,
        origin: ["Finaance", "Development", "Server"],
        title: 'How To Business',
        text: 'Join us for consultatoins',
    },
    {
        photo: img3,
        origin: ["Finaance", "Web", "Business"],
        title: 'Design Strategy',
        text: 'Join us for consultatoins',
    },
    {
        photo: img4,
        origin: ["Server", "Business", "Finaance"],
        title: 'Research Strategy',
        text: 'Join us for consultatoins',
    },
    {
        photo: img5,
        origin: ["Development", "Web"],
        title: 'IT Consultations',
        text: 'Join us for consultatoins',
    },
    {
        photo: img6,
        origin: ["Server", "Consulting"],
        title: 'Business Monitor',
        text: 'Join us for consultatoins',
    },
    {
        photo: img7,
        origin: ["Consulting", "Finaance", "Web"],
        title: 'Free Consulting',
        text: 'Join us for consultatoins',
    },
    {
        photo: img8,
        origin: ["Business", "Development"],
        title: 'Business Monitor',
        text: 'Join us for consultatoins',
    },
    {
        photo: img9,
        origin: ["Finaance", "Web"],
        title: 'IT Consultations',
        text: 'Join us for consultatoins',
    },
]

function Blocks(props) {
    const [filterProject, setFilterProject] = useState(projects)


    const handleClick = name => {
        let newFilterProjects = []
        if (name === "All Project") {
            newFilterProjects = projects

        } else {
            newFilterProjects = projects.filter(
                (project, i) => project.origin.includes(name)
            )
        }

        const index = filtersbtn.map(function (e) { return e.name }).indexOf(name)
        if (index) {
            filtersbtn.forEach(item => {
                item.isActive = false
            })
            filtersbtn[index].isActive = true
        }
        setFilterProject(newFilterProjects)
    }

    const renderAll = filterProject.map((project, i) => (
        <div key={i} className="isotope-item col-lg-4 col-sm-6">
            <div className="project-box hover-style">
                <div className="project-thumb">
                    <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + project.photo + ")" }} />
                </div>
                <div className="project-desc text-center">
                    <h4><Link to="/portfoliodetail">{project.title}</Link></h4>
                    <p>{project.text}</p>
                    <Link to="/portfoliodetail" className="project-link">
                        <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <ul className="project-nav project-isotope-filter">
                            {filtersbtn.map(({ name, value, isActive }) => (
                                <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={() => handleClick(name)}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="row project-boxes project-isotope mt-60">
                    {renderAll}
                </div>
            </div>
        </section>
    );
}

export default Blocks;