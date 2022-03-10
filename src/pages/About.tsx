import React from "react";

const About: React.FC = () => {

    return (
        <section className="page">
            <div className="cover" data-image="assets/images/photos/parallax-counter.jpg">
                <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>About Us</h1>
                            </div>
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="blue-index.html">Home</a></li>
                                    <li className="active">About Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about">
                                <div className="about-image">
                                    <img src="static/picture/1.jpg" alt=""/>
                                </div>
                                <div className="about-text">
                                    <h2>Our Mission</h2>
                                    <p>Praesent posuere nec nisl quis hendrerit. Duis sit amet rutrum lorem. Ut maximus
                                        orci in metus blandit, et placerat dolor congue.</p>
                                    <p>Proin tempor ligula nec dolor facilisis mattis. Suspendisse potenti. Suspendisse
                                        efficitur turpis quis risus molestie cursus. Cras malesuada a massa et aliquet.
                                        Nunc vel urna eu neque consectetur imperdiet. Sed pretium neque ligula, ac
                                        vehicula massa aliquet eu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax margin-bottom-100" id="parallax-text">
                    <div className="parallax-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="info">
                                        <p>We design and develop <span>web apps</span> that delight your users and grow
                                            your business.</p>
                                        <a className="btn-white-line" href="#">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about left margin-bottom-30">
                                <div className="about-image">
                                    <img src="static/picture/2.jpg" alt=""/>
                                </div>
                                <div className="about-text">
                                    <h2>Our Vision</h2>
                                    <p>Praesent posuere nec nisl quis hendrerit. Duis sit amet rutrum lorem. Ut maximus
                                        orci in metus blandit, et placerat dolor congue.</p>
                                    <p>Proin tempor ligula nec dolor facilisis mattis. Suspendisse potenti. Suspendisse
                                        efficitur turpis quis risus molestie cursus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;
