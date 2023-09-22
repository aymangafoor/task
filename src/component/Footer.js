import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="d-flex footer" id="footer">
            <div className="left-footer bg-red">
                <div className="d-flex py-5">
                    <div className="w-55 main-container mr-0">
                        <h5 className="footer-head text-uppercase">
                            Quick links
                        </h5>
                        <div className="footer-links">
                            <div className="d-flex">
                                <div className="">
                                    <Link to="/" className="footer-link d-block mb-2">Enquire Now</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Apply Now</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Student Portal</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Faculty Portal</Link>
                                    <Link to="/" className="footer-link d-block mb-2">About AURAK</Link>
                                </div>
                                <div className="mx-4 mr-0">
                                    <Link to="/" className="footer-link d-block mb-2">Leadership</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Alumni</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Campus Directory</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Library</Link>
                                    <Link to="/" className="footer-link d-block mb-2">Academic Calendar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-45">
                        <h5 className="footer-head text-uppercase">
                            Study at Aurak
                        </h5>
                        <div className="footer-links">
                            <Link to="/" className="footer-link d-block mb-1">Bachelors</Link>
                            <Link to="/" className="footer-link d-block">Masters</Link>
                        </div>
                    </div>
                </div>
                <div className="line-2 main-container w-60 px-4 bg-white" />
                <div className="social-links d-flex main-container">
                    <a href="" className="social-link"><img src="/images/social1.png" /></a>
                    <a href="" className="social-link mx-2"><img src="/images/social2.png" /></a>
                    <a href="" className="social-link mx-2"><img src="/images/social3.png" /></a>
                    <a href="" className="social-link mx-2"><img src="/images/social4.png" /></a>
                    <a href="" className="social-link mx-2"><img src="/images/social5.png" /></a>
                </div>
                <p className="main-container mr-0 text-white copyright">Copyright © 2022 American University of Ras Al Khaimah. All rights reserved</p>
            </div>
            <div className="right-footer py-5 px-5">
                <h5 className="footer-head text-dark text-uppercase">
                    Aurak Campus
                </h5>
                <div>
                    <h6 className="footer-subhead">AURAK</h6>
                    <p>Ras al Khaimah, UAE</p>
                    <p>PO Box: 10021</p>
                </div>
                <div className="numbers d-flex">
                    <div className="row w-100">
                        <div className="col-sm-6 col-12">
                            <h6 className="footer-subhead">Tel</h6>
                            <p>+ 971 7 2210 900</p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <h6 className="footer-subhead">Fax</h6>
                            <p>+ 971 7 2210 300</p>
                        </div>
                    </div>
                </div>
                <div className="line-2 bg-dark" />
                <div className="numbers d-flex">
                    <div className="row w-100">
                        <div className="col-sm-6 col-12">
                            <h6 className="footer-subhead">Email</h6>
                            <p>info@aurak.ac.ae</p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <h6 className="footer-subhead">Admissions</h6>
                            <p>admissions@aurak.ac.ae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;