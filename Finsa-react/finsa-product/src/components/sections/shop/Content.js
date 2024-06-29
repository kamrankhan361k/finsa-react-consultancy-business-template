import React, { Component } from 'react'
import Pagination from '../../layouts/Pagination'
import { Link } from 'react-router-dom'
import Sidebar from '../../layouts/Shopsidebar'

import img1 from '../../../assets/img/shop/01.png'
import img2 from '../../../assets/img/shop/02.png'
import img3 from '../../../assets/img/shop/03.png'
import img4 from '../../../assets/img/shop/04.png'
import img5 from '../../../assets/img/shop/05.png'
import img6 from '../../../assets/img/shop/06.png'
import img7 from '../../../assets/img/shop/07.png'
import img8 from '../../../assets/img/shop/08.png'
import img9 from '../../../assets/img/shop/09.png'

const shopblock = [
    { img: img1, title: 'Smart Man Jacket', price: '25.59' },
    { img: img2, title: 'Smart Man Jacket', price: '25.59' },
    { img: img3, title: 'Smart Man Jacket', price: '25.59' },
    { img: img4, title: 'Smart Man Jacket', price: '25.59' },
    { img: img5, title: 'Smart Man Jacket', price: '25.59' },
    { img: img6, title: 'Smart Man Jacket', price: '25.59' },
    { img: img7, title: 'Smart Man Jacket', price: '25.59' },
    { img: img8, title: 'Smart Man Jacket', price: '25.59' },
    { img: img9, title: 'Smart Man Jacket', price: '25.59' },
]

class Content extends Component {
    render() {

        return (
            <section className="shop-page-wrap section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 order-1">
                            <div className="row shop-top-bar justify-content-between">
                                <div className="col-lg-3 col-6 col-tiny-12">
                                    <div className="product-search">
                                        <form action="#">
                                            <input type="search" placeholder="Search Keywords" />
                                            <button type="submit"><i className="far fa-search" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-6 col-tiny-12">
                                    <div className="product-shorting">
                                        <select>
                                            <option value={0}>Short by</option>
                                            <option value={1}>Deafult</option>
                                            <option value={2}>By Name</option>
                                            <option value={3}>By Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-10 order-3 order-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 order-2 order-lg-2">
                            <div className="product-loop row">
                                {shopblock.map((item, i) => (
                                    <div key={i} className="col-lg-4 col-sm-6">
                                        <div className="single-product">
                                            <div className="product-img">
                                                <img src={item.img} alt="" />
                                                <div className="product-action">
                                                    <Link to="#"><i className="far fa-shopping-cart" /></Link>
                                                    <Link to="#"><i className="far fa-heart" /></Link>
                                                    <Link to="#"><i className="far fa-eye" /></Link>
                                                </div>
                                            </div>
                                            <div className="product-desc">
                                                <ul className="rating">
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star-half" />
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-star-half" />
                                                    </li>
                                                </ul>
                                                <h5 className="title"><Link to="/shopdetail">{item.title}</Link></h5>
                                                <span className="price">${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination-wrap text-center">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;