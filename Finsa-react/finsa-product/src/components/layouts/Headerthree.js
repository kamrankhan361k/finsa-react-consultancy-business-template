import React, { Fragment } from 'react';
import NavHelper from '../../helper/NavHelper';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';
import OffCanvas from './Offcanvas';

class Headerthree extends NavHelper {
    render() {
        const mobileactive = this.state.matches ? 'breakpoint-on' : '';
        const smallmobileactive = this.state.matches ? 'd-none' : '';
        const stickyheader = this.state.stickyheader ? 'sticky-on' : '';
        return (
            <Fragment>
                <header className={`header-three sticky-header ${stickyheader}`}>
                    {/* Header Menu  */}
                    <div className="header-nav">
                        <div className="container-fluid">
                            <div className={`nav-container ${mobileactive}`}>
                                {/* Site Logo */}
                                <div className="site-logo">
                                    <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo-3.png"} alt="Logo" /></Link>
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
                                    {/* Social Link */}
                                    <div className={`menu-social nav-push-item ${smallmobileactive}`}>
                                        <div className="menu-social-link">
                                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link to="#"><i className="fab fa-twitter" /></Link>
                                            <Link to="#"><i className="fab fa-instagram" /></Link>
                                            <Link to="#"><i className="fab fa-behance" /></Link>
                                            <Link to="#"><i className="fab fa-dribbble" /></Link>
                                        </div>
                                    </div>
                                    {/* off canvas menu toggler*/}
                                    <div className="offcanvas-toggler" onClick={this.addClass}>
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

export default Headerthree;