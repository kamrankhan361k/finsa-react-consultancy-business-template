import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import recent1 from '../../assets/img/sidebar/recent-01.jpg'
import recent2 from '../../assets/img/sidebar/recent-02.jpg'
import recent3 from '../../assets/img/sidebar/recent-03.jpg'

import authorimg from '../../assets/img/sidebar/author.jpg'

import cta from '../../assets/img/sidebar/cta.jpg'

const categories = [
    { title: 'Financial Planning' },
    { title: 'Relationship Buildup' },
    { title: 'Investement Planning' },
    { title: 'Marketing Strategy' },
    { title: 'Product Strategy' },
]

const recentpost = [
    { img: recent1, title: 'Smashing Podcast Epis With Rach Andrewe', postdate: '25 Aug 2020' },
    { img: recent2, title: 'Responsive Web And Desktop Develop', postdate: '25 Aug 2020' },
    { img: recent3, title: 'Django Highlig Models Admin Harnessing', postdate: '25 Aug 2020' },
]

const tags = [
    { tag: 'Business' },
    { tag: 'Corporate' },
    { tag: 'HTML' },
    { tag: 'Finance' },
    { tag: 'Investment' },
    { tag: 'CSS' },
    { tag: 'Planing' },
    { tag: 'Creative' },
]

class Blogsidebar extends Component {
    render() {
        return (
            <div className="sidebar">
            {/* Search Widget */}
            <div className="widget search-widget">
                <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit"><i className="far fa-search" /></button>
                </form>
            </div>
            {/* Cat Widget */}
            <div className="widget cat-widget">
                <h4 className="widget-title">Category</h4>
                <ul>
                    {categories.map((item, i) => (
                        <li key={i}>
                            <Link to="/blogdetail">{item.title} <span><i className="far fa-angle-right" /></span></Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Recent Post Widget */}
            <div className="widget recent-post-widget">
                <h4 className="widget-title">Recent News</h4>
                <div className="post-loops">
                    {recentpost.map((item, i) => (
                        <div key={i} className="single-post">
                            <div className="post-thumb">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="post-desc">
                                <span className="date"><i className="far fa-calendar-alt" />{item.postdate}</span>
                                <Link to="/blogdetail">{item.title}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Popular Tag Widget */}
            <div className="widget popular-tag-widget">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tags-loop">
                    {tags.map((item, i) => (
                        <Link key={i} to="/blogdetail">{item.tag}</Link>
                    ))}
                </div>
            </div>
            {/* Author Infor Widget */}
            <div className="widget author-widget">
                <img src={authorimg} alt="" className="author-img" />
                <h4 className="name">Brandon Johnston</h4>
                <span className="role">Author</span>
                <p>
                    Vero eos et accusamus et iustoys odio dignissimos ducimu blanditiis praesentium
                    voluptatum
                    </p>
                <ul className="social-icons">
                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                    <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                    <li><Link to="#"><i className="fab fa-dribbble" /></Link></li>
                </ul>
            </div>
            {/* CTA Widget */}
            <div className="widget cta-widget" style={{ backgroundImage: "url(" + cta + ")" }}>
                <h4 className="title">Need Any Consultations</h4>
                <Link to="/contact" className="main-btn">Send Message</Link>
            </div>
        </div>
        );
    }
}

export default Blogsidebar;