import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Pagination extends Component {
    render() {
        return (
            <div className="pagination-wrap">
                <ul>
                    <li><Link to="#"><i className="far fa-angle-left" /></Link></li>
                    <li className="active"><Link to="#">01</Link></li>
                    <li><Link to="#">02</Link></li>
                    <li><Link to="#">03</Link></li>
                    <li><Link to="#"><i className="far fa-angle-right" /></Link></li>
                </ul>
            </div>
        );
    }
}

export default Pagination;