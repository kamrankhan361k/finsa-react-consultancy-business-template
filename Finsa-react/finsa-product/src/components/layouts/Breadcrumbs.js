import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import breadcrumbimg from '../../assets/img/breadcrumb.jpg'

class Breadcrumbs extends Component {
    render() {
        return (
            <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1 className="page-title">{this.props.breadcrumb.pagename}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>{this.props.breadcrumb.pagename}</li>
                        </ul>
                    </div>
                </div>
                <div className="breadcrumb-shapes">
                    <div className="one" />
                    <div className="two" />
                    <div className="three" />
                </div>
            </section>
        );
    }
}

export default Breadcrumbs;