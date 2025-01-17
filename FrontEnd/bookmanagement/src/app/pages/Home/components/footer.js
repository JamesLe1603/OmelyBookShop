import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="">
            {/* Footer Start */}
            <div className="container-fluid text-white bg-secondary">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <h5 className="text-primary text-uppercase mb-4">OMELY BOOKSHOP</h5>
                        <p className="mb-4 text-white">Where you can place your trust</p>
                        <p className="mb-2 text-white"><i className="fa fa-map-marker text-primary mr-3" />65 Huynh Thuc Khang, Ben Nghe Ward, District 1, Ho Chi Minh City</p>
                        <p className="mb-2 text-white"><i className="fa fa-envelope text-primary mr-3" />omelybookshop@gmail.com</p>
                        <p className="mb-0 text-white"><i className="fa fa-phone text-primary mr-3" />+84 984 855 261</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4">Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white mb-2" to={`/`}><i className="fa fa-angle-right mr-2" />Home</Link>
                                    <Link className="text-white mb-2" to={`/shop.html`}><i className="fa fa-angle-right mr-2" />Products</Link>
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />About Us</a>
                                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2" />Contact</a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4">Send Feedback</h5>
                                <p className='text-white'>Please enter your email</p>
                                <form action=''>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your Email Address" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                                <h6 className="text-white text-uppercase mt-4 mb-3">Follow Us</h6>
                                <div className="d-flex">
                                    <FontAwesomeIcon className="btn btn-primary btn-square m-2 p-1" icon={faTwitter}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="btn btn-primary btn-square m-2 p-1" icon={faFacebook} />
                                    <FontAwesomeIcon className="btn btn-primary btn-square m-2 p-1" icon={faLinkedin} />
                                    <FontAwesomeIcon className="btn btn-primary btn-square m-2 p-1" icon={faInstagram} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top mx-xl-5 py-4" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-white">
                            © <a className="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
                            by
                            <a className="text-primary" href="/">HTML Codex</a>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="img/payments.png" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
