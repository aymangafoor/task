import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
    return (<div className="banner position-relative" style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.39) 0%, rgba(0, 0, 0, 0.39) 70%, rgba(176, 176, 176, 0) 100%),url("${props.background}") center / 100% no-repeat` }}>
        <div className="red-area-links bg-danger">
            <div className="main-container">
                <div className="d-flex py-2 justify-content-between">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/" className="white-link mx-2">ABOUT</Link>
                        <Link to="/programs" className="white-link mx-2">PROGRAMS</Link>
                        <Link to="/" className="white-link mx-2">JOIN AURAK</Link>
                        <Link to="/" className="white-link mx-2">STUDENT SUPPORT</Link>
                        <Link to="/" className="white-link mx-2">ALUMINI</Link>
                        <Link to="/" className="white-link mx-2">TEACHING</Link>
                        <Link to="/" className="white-link mx-2">RESEARCH</Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to="/" className="white-link-right mx-2">MEDIA</Link>
                        <Link to="/" className="white-link-right mx-2">CONTACT</Link>
                        <div className="p-2 search-btn bg-white rounded-circle d-flex justify-content-center align-items-center">
                            <img src="/images/search.png" alt="search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-container h-100 d-flex align-items-end">
            <h3 className="banner-title text-uppercase mb-5">
                {props.title}
            </h3>
            {props.read ? <div className="banner-readmore">
                <Link to="" className="read-btn d-flex align-items-center">READ MORE <img src="/images/red_down.png" className="mx-1" /></Link>
                <div className="line-1 bg-white" />
            </div> : ""}
        </div>
        <div className="position-absolute right-data mx-4">
            <div className="accessbtn">
                <div className="Vector"></div>
                <img className="img" src="/images/eye.png" />
                <div className="text">Accessibility</div>
            </div>
            <div className="bg-danger rounded-circle w-fit my-2">
                <img src="/images/message.png" className="m-2" alt="message" />
            </div>
            <div className="bg-danger rounded-circle w-fit">
                <img src="/images/hashtag.png" className="m-2" alt="hashtag" />
            </div>
        </div>
    </div>)
}
export default Banner;