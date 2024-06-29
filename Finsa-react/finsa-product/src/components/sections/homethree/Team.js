import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import img1 from '../../../assets/img/team/09.jpg'
import img2 from '../../../assets/img/team/08.jpg'
import img3 from '../../../assets/img/team/07.jpg'
import img4 from '../../../assets/img/team/06.jpg'
import img5 from '../../../assets/img/team/05.jpg'

const teamblock = [
    { img: img1, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img2, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img3, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img4, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img5, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img1, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img2, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img3, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img4, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img5, name: 'John N. Holmes', post: 'Business Developer' },
]
function Team(props) {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        arrows: false,
        fade: false,
        dots: false,
        swipe: true,
        responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: true,
            },
        },
        ],
    }

    return (
        <section className="team-section">
            <div className="container-fluid p-70">
                <div className="section-title text-center both-border mb-80">
                    <span className="title-tag"> Team Member </span>
                    <h2 className="title">Meet Our Professional <br /> Expertise</h2>
                </div>
                {/* Team Slider */}
                <Slider className="team-members-two row" id="teamSliderTwo" {...settings}>
                    {teamblock.map((item, i) => (
                        <div key={i} className="col">
                            <div className="team-member">
                                <div className="member-picture">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="member-desc">
                                    <h3 className="name"><Link to="/teamdetail">{item.name}</Link></h3>
                                    <span className="pro">{item.post}</span>
                                    <ul className="social-icons">
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Team;