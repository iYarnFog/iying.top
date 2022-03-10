import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {

    return (
        <>
            <div id="preloader">
                <div id="loader" className="spinner">
                    <div id="shadow"/>
                    <div id="box"/>
                </div>
            </div>
            <header className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="" className="logo">
                                    <img src="static/picture/logo.png" alt="Turing"/>
                                </a>
                                <ul className="nav">
                                    <li><Link to='/index'>Home</Link></li>
                                    <li className="submenu">
                                        <a href="javascript:;">Discover</a>
                                        <ul>
                                            <li><a href='#features'>Features</a></li>
                                            <li><a href='#our-team'>Our Team</a></li>
                                            <li><a href='#pricing-plans'>Pricing Plans</a></li>
                                            <li><a href='#blog'>Latests Blogs</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">Pages</a>
                                        <ul>
                                            <li><Link to='/about'>About Us</Link></li>
                                            <li><Link to='/features'>Features</Link></li>
                                            <li><Link to='/faq'>FAQ's</Link></li>
                                            <li><Link to='/blog'>Blog</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>

                                <ul className="header-buttons">
                                    <li><a className="btn-nav-line" href="features.html">Apps</a></li>
                                    <li><a className="btn-nav-primary" href="faq.html">Support</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}

export default Header;
