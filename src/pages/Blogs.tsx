import React, { useEffect } from "react";

const Blogs: React.FC = () => {

    useEffect(() => {
        // Blog cover image
        if($('.blog-post-thumb').length){
            // @ts-ignore
            $('.blog-post-thumb .img').imgfix();
        }
    }, []);

    return (
        <section className="page">
            <div className="cover" data-image="assets/images/photos/parallax-counter.jpg">
                <div className="page-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Blog</h1>
                            </div>
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="blue-index.html">Home</a></li>
                                    <li className="active">Blog</li>
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
                            <div className="blog-list">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-post-thumb big">
                                            <div className="img">
                                                <img src="static/picture/12.jpg" alt=""/>
                                                <div className="date">
                                                    <strong>APR</strong>
                                                    <span>09</span>
                                                </div>
                                            </div>
                                            <ul className="post-meta">
                                                <li><a href="#"><span className="icon fa fa-user"></span>by Turing</a>
                                                </li>
                                                <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments
                                                </a></li>
                                            </ul>
                                            <h3>
                                                <a href="blue-blog-single.html">Turing Expands the Leadership Team with
                                                    David Lin, Controller</a>
                                            </h3>
                                            <div className="text">
                                                Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris.
                                                Sed eget sem vitae purus tempus dignissim. Quisque euismod nec lacus sit
                                                amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor
                                                tortor eu risus condimentum.
                                            </div>
                                            <a href="blue-blog-single.html" className="btn-primary-line">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="blog-post-thumb">
                                            <div className="img">
                                                <img src="static/picture/22.jpg" alt=""/>
                                                <div className="date">
                                                    <strong>APR</strong>
                                                    <span>09</span>
                                                </div>
                                            </div>
                                            <ul className="post-meta">
                                                <li><a href="#"><span className="icon fa fa-user"></span>by Turing</a>
                                                </li>
                                                <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments
                                                </a></li>
                                            </ul>
                                            <h3>
                                                <a href="blue-blog-single.html">Turing Partners with Velocloud to
                                                    Deliver Managed SD-WAN</a>
                                            </h3>
                                            <div className="text">
                                                Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et
                                                malesuada fames ac ante ipsum primis in faucibus.
                                            </div>
                                            <a href="blue-blog-single.html" className="btn-primary-line">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="blog-post-thumb">
                                            <div className="img">
                                                <img src="static/picture/31.jpg" alt=""/>
                                                <div className="date">
                                                    <strong>APR</strong>
                                                    <span>09</span>
                                                </div>
                                            </div>
                                            <ul className="post-meta">
                                                <li><a href="#"><span className="icon fa fa-user"></span>by Turing</a>
                                                </li>
                                                <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments
                                                </a></li>
                                            </ul>
                                            <h3>
                                                <a href="blue-blog-single.html">Corporate IT Solutions Adds Neva Senior
                                                    Account Executive</a>
                                            </h3>
                                            <div className="text">
                                                Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem
                                                auctor malesuada. Morbi auctor.
                                            </div>
                                            <a href="blue-blog-single.html" className="btn-primary-line">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="blog-post-thumb">
                                            <div className="img">
                                                <img src="static/picture/12.jpg" alt=""/>
                                                <div className="date">
                                                    <strong>APR</strong>
                                                    <span>09</span>
                                                </div>
                                            </div>
                                            <ul className="post-meta">
                                                <li><a href="#"><span className="icon fa fa-user"></span>by Turing</a>
                                                </li>
                                                <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments
                                                </a></li>
                                            </ul>
                                            <h3>
                                                <a href="blue-blog-single.html">Turing Expands the Leadership Team with
                                                    David Lin, Controller</a>
                                            </h3>
                                            <div className="text">
                                                Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et
                                                malesuada fames ac ante ipsum primis in faucibus.
                                            </div>
                                            <a href="blue-blog-single.html" className="btn-primary-line">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="blog-post-thumb">
                                            <div className="img">
                                                <img src="static/picture/1.jpg" alt=""/>
                                                <div className="date">
                                                    <strong>APR</strong>
                                                    <span>09</span>
                                                </div>
                                            </div>
                                            <ul className="post-meta">
                                                <li><a href="#"><span className="icon fa fa-user"></span>by Turing</a>
                                                </li>
                                                <li><a href="#"><span className="icon fa fa-comment-o"></span>3 Comments
                                                </a></li>
                                            </ul>
                                            <h3>
                                                <a href="blue-blog-single.html">Turing Partners with Velocloud to
                                                    Deliver Managed SD-WAN</a>
                                            </h3>
                                            <div className="text">
                                                Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem
                                                auctor malesuada. Morbi auctor.
                                            </div>
                                            <a href="blue-blog-single.html" className="btn-primary-line">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <aside className="default-aside">
                                <div className="sidebar">
                                    <div className="search-widget">
                                        <div className="search">
                                            <form>
                                                <input type="text" placeholder="Search"/>
                                                <button type="submit"><i className="fa fa-search"/></button>
                                            </form>
                                        </div>
                                    </div>
                                    <ul>
                                        <li><a href="#">Cloud PMS <span>23</span></a></li>
                                        <li><a href="#">Desktop PMS <span>12</span></a></li>
                                        <li><a href="#">Hotel Software <span>153</span></a></li>
                                        <li><a href="#">Social Media <span>9</span></a></li>
                                        <li><a href="#">General <span>95</span></a></li>
                                        <li><a href="#">Marketing <span>32</span></a></li>
                                        <li><a href="#">Mobile Future <span>76</span></a></li>
                                    </ul>

                                    <div className="widget-tags">
                                        <a href="#">Team</a>
                                        <a href="#">Hotel</a>
                                        <a href="#">Android</a>
                                        <a href="#">App</a>
                                        <a href="#">Software</a>
                                        <a href="#">Development</a>
                                        <a href="#">API</a>
                                        <a href="#">Store</a>
                                        <a href="#">Reservation</a>
                                        <a href="#">Analytics</a>
                                        <a href="#">Support</a>
                                        <a href="#">Coding</a>
                                        <a href="#">Database</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Blogs;
