import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

    const mobileNav = () => {
        const width = $(window).width();
        $('.submenu').on('click', function () {
            // @ts-ignore
            if (width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    };

    useEffect(() => {
        // Menu Dropdown Toggle
        if ($('.menu-trigger').length) {
            $(".menu-trigger").on('click', function () {
                $(this).toggleClass('active');
                $('.header-area .nav').slideToggle(200);
            });
        }
        // 因为使用了 React Router Dom，所以不会有 A 标签被匹配到
        // Menu elevator animation
        $('a[href*=\\#]:not([href=\\#])').on('click', function () {
            // @ts-ignore
            // eslint-disable-next-line no-restricted-globals
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                // @ts-ignore
                let target = $(this.hash);
                // @ts-ignore
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    const width = $(window).width();
                    // @ts-ignore
                    console.log(width, width < 991)
                    // @ts-ignore
                    if (width < 991) {
                        $('.menu-trigger').removeClass('active');
                        $('.header-area .nav').slideUp(200);
                    }
                    $('html,body').animate({
                        // @ts-ignore
                        scrollTop: (target.offset().top) - 30
                    }, 700);
                    return false;
                }
            }
        });

        mobileNav();
        // Window Resize Mobile Menu Fix
        $(window).on('resize', mobileNav);
    }, []);

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
                                        <a href="#">Discover</a>
                                        <ul>
                                            <li><a href='#features'>Features</a></li>
                                            <li><a href='#our-team'>Our Team</a></li>
                                            <li><a href='#pricing-plans'>Pricing Plans</a></li>
                                            <li><a href='#blog'>Latests Blogs</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="#">Pages</a>
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
