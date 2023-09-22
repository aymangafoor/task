import React from "react";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import "./inner.css"

const Inner = () => {
    return (
        <div className="innerpage">
            <Header />
            <Banner title={"Programs"} background={"images/innerbanner.png"} type="inner" />
            <div className="main-container my-5 py-5">
                <h4 className="banner-title secondary-title text-dark text-uppercase">
                    It’s the place you can learn <br />
                    & grow
                </h4>
                <p className="description">The University program has been built with a goal of educating students' individuals, while also improving the lives of their communities. It is designed with a holistic education in mind. The program is designed to be flexible, empowering you to choose your own pathway to success.</p>
            </div>
            <Footer />
        </div>
    )
}
export default Inner;