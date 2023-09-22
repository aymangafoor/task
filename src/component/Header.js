import React from "react";
import "./component.css"
const Header = () => {
    return (
        <div className="header" id="header">
            <div className="main-container py-3">
                <div className="d-flex justify-content-between w-100">
                    <div className="">
                        <img src="/images/logo.png" className="w-75 head-logo" alt="logo" />
                    </div>
                    <div className="d-flex">
                        <span className="d-flex mx-2 align-items-center">
                            <img src="/images/globe.png" className="" alt="globe" />
                            <img src="/images/red_down.png" className="mx-1" alt="down" />
                        </span>
                        <span className="d-flex mx-2 align-items-center">
                            <div className="w-fit d-flex align-items-center">
                                <img src="/images/user.png" className="" alt="user" />
                                <p className="header-link mx-2 text-uppercase">Student portal</p>
                            </div>
                        </span>
                        <span className="d-flex mx-2 align-items-center">
                            <div className="w-fit d-flex align-items-center">
                                <img src="/images/user.png" className="" alt="user" />
                                <p className="header-link mx-2 text-uppercase">Faculty portal</p>
                            </div>
                        </span>
                    </div>
                    <div className="buttons d-flex align-items-center">
                        <button type="button" className="btn btn-danger mx-2">Enquire now</button>
                        <button type="button" className="btn btn-danger mx-2">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;