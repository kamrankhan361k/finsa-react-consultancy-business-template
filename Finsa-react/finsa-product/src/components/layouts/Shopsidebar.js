import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const category = [
    { title: 'Accessories' },
    { title: 'Clothing' },
    { title: 'Decor' },
    { title: 'Hoodies' },
    { title: 'Music' },
    { title: 'Tshirts' },
    { title: 'Uncategorized' },
]

const poptags = [
    { tag: 'Cleaning' },
    { tag: 'Business' },
    { tag: 'Car' },
    { tag: 'House' },
    { tag: 'Wasing' },
    { tag: 'Agency' },
]

class Shopsidebar extends Component {
    render() {
        return (
            <div className="shop-sidebar">
                <div className="widget product-cat-widget">
                    <h4 className="widget-title">Category</h4>
                    <ul>
                        {category.map((item, i) => (
                            <li key={i}><Link to="/shopdetail">{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget product-tag-widget">
                    <h4 className="widget-title">Populer Tag</h4>
                    <div className="tags-loop">
                        {poptags.map((item, i) => (
                            <Link to="/shopdetail" key={i}>{item.tag}</Link>
                        ))}
                    </div>
                </div>
                <div className="widget product-filter-widget">
                    <h4 className="widget-title">Filer By Price</h4>
                    <div className="price-range-wrap">
                        <div className="slider-range">
                            <div id="slider-range" />
                        </div>
                        <div className="price-ammount">
                            <span>Price :</span>
                            <input type="text" id="amount" name="price" disabled />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shopsidebar;