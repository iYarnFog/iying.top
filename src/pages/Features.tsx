import React from "react";

const Features: React.FC = () => {

    return (
        <section className="page">
            <div className="cover" data-image="assets/images/photos/parallax-counter.jpg">
                <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Features</h1>
                            </div>
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="blue-index.html">Home</a></li>
                                    <li className="active">Features</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-cloud"/>
                                </div>
                                <h5 className="features-title">Cloud Solutions</h5>
                                <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-laptop"/>
                                </div>
                                <h5 className="features-title">Network Services</h5>
                                <p>Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-video-camera"/>
                                </div>
                                <h5 className="features-title">Webcast Services</h5>
                                <p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.8s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-server"/>
                                </div>
                                <h5 className="features-title">Disaster Recovery</h5>
                                <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-desktop"/>
                                </div>
                                <h5 className="features-title">Digital Platform</h5>
                                <p>Morbilling pharetra sapiening ut mattis viverra. Curabitur magna.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-cogs"/>
                                </div>
                                <h5 className="features-title">Systems Solutions</h5>
                                <p>Donec pellentesque turpis utium lorem imperdiet semper viverra.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-microchip"/>
                                </div>
                                <h5 className="features-title">Hosting Services</h5>
                                <p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12"
                             data-scroll-reveal="enter bottom move 50px over 0.6s after 0.8s">
                            <a href="blue-features-single.html" className="features-small-item">
                                <div className="icon">
                                    <i className="fa fa-bar-chart-o"/>
                                </div>
                                <h5 className="features-title">Data Services</h5>
                                <p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Features;
