import React from "react";

const Feature: React.FC = () => {

    return (
        <section className="page">
            <div className="cover" data-image="assets/images/photos/parallax-counter.jpg">
                <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Cloud Solutions</h1>
                            </div>
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="blue-index.html">Home</a></li>
                                    <li><a href="blue-features.html">Features</a></li>
                                    <li className="active">Cloud Solutions</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="page-detail">
                                <p>Proin pellentesque quam at quam aliquet, eget mattis quam euismod. Curabitur
                                    imperdiet suscipit facilisis. Maecenas diam quam, sodales eu est eu, posuere
                                    ultricies augue. </p>
                                <p>Sed rhoncus facilisis risus, nec sagittis dui luctus in. Nunc eget ante odio.
                                    Suspendisse eu diam ut nisi ullamcorper interdum. Pellentesque sit amet quam risus.
                                    In a augue aliquam, venenatis tortor in, placerat purus. Donec rhoncus nisi sit amet
                                    convallis tempor. </p>

                                <div className="about">
                                    <div className="about-image">
                                        <img src="static/picture/1.jpg" alt=""/>
                                    </div>
                                    <div className="about-text">
                                        <h2>Services Detail</h2>
                                        <p>Praesent posuere nec nisl quis hendrerit. Duis sit amet rutrum lorem. Ut
                                            maximus orci in metus blandit, et placerat dolor congue.</p>
                                        <p>Proin tempor ligula nec dolor facilisis mattis. Suspendisse potenti.
                                            Suspendisse efficitur turpis quis risus molestie cursus.</p>
                                    </div>
                                </div>

                                <p>Sed rhoncus facilisis risus, nec sagittis dui luctus in. Nunc eget ante odio.
                                    Suspendisse eu diam ut nisi ullamcorper interdum. Pellentesque sit amet quam risus.
                                    In a augue aliquam, venenatis tortor in, placerat purus. Donec rhoncus nisi sit amet
                                    convallis tempor. </p>
                                <div className="row page-gallery-wrapper">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <a href="static/picture/12.jpg" className="page-gallery"
                                           title="Manage In One Place">
                                            <img src="static/picture/12.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <a href="static/picture/22.jpg" className="page-gallery"
                                           title="Manage In One Place">
                                            <img src="static/picture/22.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <a href="static/picture/31.jpg" className="page-gallery"
                                           title="Manage In One Place">
                                            <img src="static/picture/31.jpg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <aside className="default-aside">
                                <div className="sidebar">
                                    <ul>
                                        <li className="active"><a href="#">Cloud Solutions</a></li>
                                        <li><a href="#">Network Services</a></li>
                                        <li><a href="#">Webcast Services</a></li>
                                        <li><a href="#">Disaster Recovery</a></li>
                                        <li><a href="#">Digital Platform</a></li>
                                        <li><a href="#">Systems Solutions</a></li>
                                        <li><a href="#">Hosting Services</a></li>
                                        <li><a href="#">Data Services</a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Feature;
