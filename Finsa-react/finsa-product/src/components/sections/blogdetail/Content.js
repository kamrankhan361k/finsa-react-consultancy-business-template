import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../layouts/Blogsidebar'

import blogbanner from '../../../assets/img/blog/12.jpg'
import author from '../../../assets/img/details/post-author.jpg'

import prevpost from '../../../assets/img/sidebar/recent-01.jpg'
import nextpost from '../../../assets/img/sidebar/recent-03.jpg'

import latest1 from '../../../assets/img/latest-post/01.jpg'
import latest2 from '../../../assets/img/latest-post/02.jpg'

import comment1 from '../../../assets/img/details/comment-1.png'
import comment2 from '../../../assets/img/details/comment-2.png'
import comment3 from '../../../assets/img/details/comment-3.png'

const posttags = [
    { title: 'IT Consulting' },
    { title: 'Business' },
    { title: 'Corporate' },
]

const socialshare = [
    { url: '#', icon: 'fab fa-facebook-f' },
    { url: '#', icon: 'fab fa-twitter' },
    { url: '#', icon: 'fab fa-instagram' },
    { url: '#', icon: 'fab fa-behance' },
]

const relatedpost = [
    { img: latest1, title: ' How Performance Visiblety With GitLab CI & Hood', urltext: 'Learn More', postdate: '25 Aug 2020' },
    { img: latest2, title: 'Inspired Design Decisions With Max Huber Turne', urltext: 'Learn More', postdate: '25 Aug 2020' },
]

class Content extends Component {
    render() {

        return (
            <section className="blog-section section-gap-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Blog Details */}
                            <div className="post-details-wrap">
                                <div className="post-thumb">
                                    <img src={blogbanner} alt="" />
                                </div>
                                <div className="post-meta">
                                    <ul>
                                        <li><i className="far fa-user" /><Link to="/blogdetail">Nichel Jhon</Link></li>
                                        <li><i className="far fa-calendar-alt" /><Link to="/blogdetail">25 Aug 2020</Link></li>
                                        <li><i className="far fa-comments" /><Link to="/blogdetail">Comments (05)</Link></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <h3 className="title">
                                        Inspired Design Decisions With Herb Typography Can Be As Exciting As
                                        Illustration &amp; Photo
                                    </h3>
                                    <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was born and I will give you a complete account of the system, and expound the
                                        actual teachings of the great explorer of the truth, the master-builder of human
                                        happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                                        but because those who do not know how to pursue pleasure rationally encounter
                                        consequences that are extremely painful. Nor again is there anyone who loves or pursues
                                        or desires to obtain pain of itself, because it is pain, but because occasionally
                                        circumstances occur in which toil and pain can procure him some great pleasure. To take
                                        a trivial example, which of us ever undertakes laborious physical exercise, except to
                                        obtain some advantage from it but who has any right to find fault with a man who chooses
                                    </p>
                                    <blockquote>
                                        Smashing Podcast Episode With Paul Boag What Is Conversion Optimization
                                        <span className="author">Bailey Dobson</span>
                                    </blockquote>
                                    <h4 className="with-check"><i className="far fa-check-circle" /> Inspired Design Decisions With
                                        Otto Storch When Idea Copy</h4>
                                    <p>
                                        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                                        those who do not know how to pursue pleasure rationally encounter consequences that are
                                        extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
                                        pain of itself, because it is pain, but because occasionally circumstances occur in
                                        which toil and pain can procure him some great pleasure.
                                    </p>
                                </div>
                                <div className="post-footer d-md-flex align-items-md-center justify-content-md-between">
                                    <div className="post-tag">
                                        <ul>
                                            <li className="title">Popular Tags :</li>
                                            {posttags.map((item, i) => (
                                                <li key={i}><Link to="/blogdetail">{item.title},</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="post-share">
                                        <ul>
                                            <li className="title">Share :</li>
                                            {socialshare.map((item, i) => (
                                                <li key={i}><Link to={item.url}><i className={item.icon} /></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Post Author */}
                            <div className="post-author-info">
                                <div className="author-img">
                                    <img src={author} alt="" />
                                </div>
                                <div className="author-desc">
                                    <h4>Nathan George</h4>
                                    <p>
                                        No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                                        those who do not know how to pursue pleasure rationally encounter consequences that
                                        aextremely painful. Nor again is there anyone who loves
                                    </p>
                                    <ul className="social-links">
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-dribbble" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Post Nav */}
                            <div className="post-nav row">
                                <div className="prev-post col-md-6">
                                    <div className="img">
                                        <img src={prevpost} alt="" />
                                    </div>
                                    <div className="content">
                                        <span className="date"><i className="far fa-calendar-alt" /> 25 Aug 2020</span>
                                        <h5><Link to="/blogdetail">Smashing Podcast Epis <br /> With Rach Andrewe</Link></h5>
                                    </div>
                                </div>
                                <div className="next-post col-md-6">
                                    <div className="content">
                                        <span className="date">25 Aug 2020 <i className="far fa-calendar-alt" /></span>
                                        <h5><Link to="/blogdetail">Implementing Infinite <br /> Loading In React</Link></h5>
                                    </div>
                                    <div className="img">
                                        <img src={nextpost} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* Related Post */}
                            <div className="related-post">
                                <h3 className="title">Related Post</h3>
                                <div className="latest-post-loop row ">
                                    {relatedpost.map((item, i) => (
                                        <div key={i} className="col-lg-6 col-md-6 col-10 col-tiny-12">
                                            <div className="latest-post-box-two">
                                                <div className="post-thumb-wrap">
                                                    <div className="post-thumb bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                                    </div>
                                                    <span className="post-date"><i className="far fa-calendar-alt" />{item.postdate}</span>
                                                </div>
                                                <div className="post-desc">
                                                    <h3 className="title">
                                                        <Link to="/blogdetail">{item.title}</Link>
                                                    </h3>
                                                    <Link to="/blogdetail" className="post-link">
                                                        {item.urltext} <i className="far fa-long-arrow-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Comments Template */}
                            <div className="comment-template">
                                <h3 className="title">Comments</h3>
                                {/* Comments List */}
                                <ul className="comment-list">
                                    <li>
                                        <div className="author-img">
                                            <img src={comment1} alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <h5 className="author-name">John F. Medina<span className="date">25 July 2020</span></h5>
                                            <p>
                                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pawas born and I will give you a complete account
                                            </p>
                                            <Link to="#" className="reply-btn">Reply <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                        <ul className="children">
                                            <li>
                                                <div className="author-img">
                                                    <img src={comment2} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <h5 className="author-name">Jeffrey T. Kelly<span className="date">25 July
                                                        2020</span>
                                                    </h5>
                                                    <p>
                                                        Again is there anyone who loves or pursues or desires to obtain paiits
                                                        ecause it is pain, but because occasionally circumstances occur in which
                                                    </p>
                                                    <Link to="#" className="reply-btn">Reply <i className="far fa-long-arrow-alt-right" /></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="author-img">
                                            <img src={comment3} alt="" />
                                        </div>
                                        <div className="comment-content">
                                            <h5 className="author-name">Richard B. Zellmer<span className="date">25 July 2020</span>
                                            </h5>
                                            <p>
                                                Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                                soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                            </p>
                                            <Link to="#" className="reply-btn">Reply <i className="far fa-long-arrow-alt-right" /></Link>
                                        </div>
                                    </li>
                                </ul>
                                {/* Comments form */}
                                <div className="comment-form">
                                    <h3 className="title">Leave A Reply</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="input-group mb-30">
                                                    <input type="text" placeholder="Your Full Name" />
                                                    <span className="icon"><i className="far fa-user" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group mb-30">
                                                    <input type="email" placeholder="Your Email " />
                                                    <span className="icon"><i className="far fa-envelope" /></span>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group textarea mb-30">
                                                    <textarea placeholder="Write Message" defaultValue={""} />
                                                    <span className="icon"><i className="far fa-pencil" /></span>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="main-btn">Send Reply</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            {/* sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;