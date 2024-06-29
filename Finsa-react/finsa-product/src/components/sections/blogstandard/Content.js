import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../layouts/Blogsidebar'
import Pagination from '../../layouts/Pagination'

import blogimg1 from '../../../assets/img/blog/01.jpg'
import blogimg2 from '../../../assets/img/blog/02.jpg'
import blogimg3 from '../../../assets/img/blog/03.jpg'

class Content extends Component {
    render() {

        return (
            <section className="blog-section section-gap-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Blog loop(Standard) */}
                            <div className="blog-loop standard-blog row">
                                {/* Single Post */}
                                <div className="col-12">
                                    <div className="single-post-box">
                                        <div className="post-thumb">
                                            <img src={blogimg1} alt="" />
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
                                                <Link to="/blogdetail">
                                                    Inspired Design Decisions With Herb Typography Can Be As Exciting As
                                                    Illustration &amp; Photog
                                                </Link>
                                            </h3>
                                            <p>
                                                But must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pain was born and will give you a complete account of the system, and
                                                expound the actual teachings of the great explorer of the truth, the
                                                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                                itse
                                            </p>
                                            <Link to="/blogdetail" className="main-btn">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Post */}
                                <div className="col-12">
                                    <div className="single-post-box">
                                        <div className="post-thumb">
                                            <img src={blogimg2} alt="" />
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
                                                <Link to="/blogdetail">
                                                    What Should You Do When A Web Design Trend Becomes Too Popular? Typography
                                                </Link>
                                            </h3>
                                            <p>
                                                But must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pain was born and will give you a complete account of the system, and
                                                expound the actual teachings of the great explorer of the truth, the
                                                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                                itse.
                                            </p>
                                            <Link to="/blogdetail" className="main-btn">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Post */}
                                <div className="col-12">
                                    <div className="single-post-box quote-post">
                                        <div className="post-meta">
                                            <ul>
                                                <li><i className="far fa-user" /><Link to="/blogdetail">Nichel Jhon</Link></li>
                                                <li><i className="far fa-calendar-alt" /><Link to="/blogdetail">25 Aug 2020</Link></li>
                                                <li><i className="far fa-comments" /><Link to="/blogdetail">Comments (05)</Link></li>
                                            </ul>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link to="/blogdetail">
                                                    Visual Design Language The Building Blocks Of Design Web Design Trend
                                                    Becomes
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Post */}
                                <div className="col-12">
                                    <div className="single-post-box video-post">
                                        <div className="post-video">
                                            <img src={blogimg3} alt="" />
                                            <Link to="https://www.youtube.com/watch?v=fEErySYqItI" className="popup-video">
                                                <i className="fas fa-play" />
                                            </Link>
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
                                                <Link to="/blogdetail">
                                                    How Increase Mobile Conversions With Category Page DesignTrend Becomes
                                                    Typography
                                                </Link>
                                            </h3>
                                            <p>
                                                But must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pain was born and will give you a complete account of the system, and
                                                expound the actual teachings of the great explorer of the truth, the
                                                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                                                itse.
                                            </p>
                                            <Link to="/blogdetail" className="main-btn">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-post-box no-thumb">
                                        <div className="post-meta">
                                            <ul>
                                                <li><i className="far fa-user" /><Link to="/blogdetail">Nichel Jhon</Link></li>
                                                <li><i className="far fa-calendar-alt" /><Link to="/blogdetail">25 Aug 2020</Link></li>
                                                <li><i className="far fa-comments" /><Link to="/blogdetail">Comments (05)</Link></li>
                                            </ul>
                                        </div>
                                        <div className="post-content">
                                            <h3 className="title">
                                                <Link to="/blogdetail">
                                                    Inspired Design Decisions With Otto Storch When Idea Copy Art And Typography
                                                </Link>
                                            </h3>
                                            <p>
                                                But must explain to you how all this mistaken idea of denouncing pleasure and
                                                praising pain born and give you a complete account of the system, and expound
                                                the actual teachings of the great explorer of the the
                                                master-builder of human happiness. No one rejects,
                                            </p>
                                            <Link to="/blogdetail" className="main-btn">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <Pagination />
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