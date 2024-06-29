import React from 'react';
import NavHelper from '../../helper/NavHelper';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';

class Header extends NavHelper {
    render() {
        const mobileactive = this.state.matches ? 'breakpoint-on' : '';
        const smallmobileactive = this.state.matches ? 'd-none' : '';
        const stickyheader = this.state.stickyheader ? 'sticky-on' : '';
        return (
            <header className={`sticky-header ${stickyheader}`}>
                {/* Header Menu  */}
                <div className="header-nav">
                    <div className="container-fluid container-1600">
                        <div className={`nav-container ${mobileactive}`}>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" /></Link>
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
                            <div className="navbar-extra d-lg-block d-flex align-items-center">
                                {/* Navbtn */}
                                <div className={`navbar-btn nav-push-item ${smallmobileactive}`}>
                                    <Link to="/contact" className="main-btn main-btn-3">Consulting Now</Link>
                                </div>
                                {/* Navbar Toggler */}
                                <div className={this.togglemethod === true ? 'navbar-toggler active' : 'navbar-toggler'} onClick={this.toggleClass}>
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;