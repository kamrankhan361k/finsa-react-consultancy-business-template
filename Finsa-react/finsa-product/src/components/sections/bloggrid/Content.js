import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../layouts/Blogsidebar'
import Pagination from '../../layouts/Pagination'

import img1 from '../../../assets/img/blog/04.jpg'
import img2 from '../../../assets/img/blog/05.jpg'
import img3 from '../../../assets/img/blog/06.jpg'
import img4 from '../../../assets/img/blog/07.jpg'
import img5 from '../../../assets/img/blog/08.jpg'
import img6 from '../../../assets/img/blog/09.jpg'
import img7 from '../../../assets/img/blog/10.jpg'
import img8 from '../../../assets/img/blog/11.jpg'

const blogblock = [
    { img: img1, title: 'How Performance Visiblety With GitLab CI And Hood', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img2, title: 'Inspired Design Decisions With Max Huber Turne', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img3, title: 'Mirage JS Deep Dive Unders Tanding Mirage JS Models', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img4, title: 'Brighten Up Someone’s May With Max Huber Turne', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img5, title: 'Why Collaborative Coding Is The Ultimate Career Hack', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img6, title: 'Responsive Web & Desktop Development Flutter', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img7, title: 'How To Create Particle Trail Animation In JavaScript', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
    { img: img8, title: 'Inspired Design Decisions With Herb Lubalin Can', text: 'Sedut perspiciatis unde omnis nat erroroluptat accusantium laudantim totam raperiaeaqupsa quae', postdate: '25 Aug 2020', urltext: 'Learn More' },
]



class Content extends Component {
    render() {
    return (
        <section className="blog-section section-gap-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Blog loop(Grid) */}
                        <div className="blog-loop grid-blog row justify-content-center">
                            {/* Single Post */}
                            {blogblock.map((item, i) => (
                                <div key={i} className="col-lg-6 col-md-6 col-10 col-tiny-12">
                                    <div className="single-post-box">
                                        <div className="post-thumb">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <span className="post-date"><i className="far fa-calendar-alt" />{item.postdate}</span>
                                            <h3 className="title">
                                                <Link to="/blogdetail">{item.title}</Link>
                                            </h3>
                                            <p>{item.text}</p>
                                            <Link to="/blogdetail" className="post-link">
                                                {item.urltext} <i className="far fa-long-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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