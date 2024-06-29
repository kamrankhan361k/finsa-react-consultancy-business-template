import React, { Fragment } from 'react';
import NavHelper from '../../helper/NavHelper';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';
import OffCanvas from './Offcanvas';

class Headertwo extends NavHelper {
    render() {
        const mobileactive = this.state.matches ? 'breakpoint-on' : '';
        const stickyheader = this.state.stickyheader ? 'sticky-on' : '';
        return (
            <Fragment>
                <header className={`header-two sticky-header ${stickyheader}`}>
                    {/* Header Topbar */}
                    <div className="header-topbar">
                        <div className="container-fluid container-1600">
                            <div className="header-topbar-inner d-md-flex align-items-center justify-content-between">
                                {/* Contact Info */}
                                <ul className="contact-info">
                                    <li>
                                        <Link to="#"><i className="far fa-phone" />+012 (345) 6789</Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="far fa-envelope-open" />support@gmail.com</Link>
                                    </li>
                                    <li>
                                        <i className="far fa-map-marker-alt" />Broklyn Street USA
                                    </li>
                                </ul>
                                {/* Social Links */}
                                <ul className="social-links">
                                    <li>
                                        <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="fab fa-twitter" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="fab fa-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="fab fa-behance" /></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><i className="fab fa-dribbble" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Header Menu  */}
                    <div className="header-nav sticky-nav">
                        <div className="container-fluid container-1600">
                            <div className={`nav-container ${mobileactive}`}>
                                {/* Site Logo */}
                                <div className="site-logo">
                                    <Link to="/hometwo"><img src={process.env.PUBLIC_URL + "/assets/img/logo-2.png"} alt="Logo" /></Link>
                                </div>
                                {/* Main Menu */}
                                <div className={this.state.togglemethod === true ? 'nav-menu d-lg-flex align-items-center menu-on' : 'nav-menu d-lg-flex align-items-center'}>
                                    {/* Navbar Close Icon */}
                                    <div className="navbar-close" onClick={this.toggleClass}>
                                        <div className="cross-wrap"><span /><span /></div>
                                    </div>
                                    {/* Mneu Items */}
                                    <div className="menu-items">
                                        <Navmenu />
                                    </div>
                                    {/* Pushed Item */}
                                    <div className="nav-pushed-item" />
                                </div>
                                {/* Navbar Extra  */}
                                <div className="navbar-extra d-flex align-items-center">
                                    {/* language selection */}
                                    <div className="language-selection">
                                        <Link className="language-btn" to="#">Eng<i className="far fa-angle-down" /></Link>
                                        <ul className="language-list">
                                            <li><Link to="#">Eng</Link></li>
                                            <li><Link to="#">Ban</Link></li>
                                            <li><Link to="#">USA</Link></li>
                                        </ul>
                                    </div>
                                    {/* off canvas menu toggler*/}
                                    <div className="offcanvas-toggler" onClick={this.canvasToggle}>
                                        <span><span /><span /><span /></span>
                                    </div>
                                    {/* Navbar Toggler */}
                                    <div className={this.state.togglemethod === true ? 'navbar-toggler active' : 'navbar-toggler'} onClick={this.toggleClass}>
                                        <span /><span /><span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={this.state.classmethod === true ? 'offcanvas-wrapper show-offcanvas' : 'offcanvas-wrapper'}>
                    <div className={this.state.classmethod === true ? 'offcanvas-overly show-overly' : 'offcanvas-overly'} onClick={this.canvasToggle} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.canvasToggle} ><i className="fal fa-times" /></Link>
                        <OffCanvas />
                    </div >
                </div >
            </Fragment>
        );
    }
}

export default Headertwo;