import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import "./home.css"
import { Link } from "react-router-dom";

const Home = () => {
    const data = [
        { title: "AURAK welcomes Prof. Hariclea Zengos as the new Dean of the School of Arts and Sciences", date: "09 - 01 - 2022", desc: "Professor Hariclea Zengos, a distinguished professor of literature..." },
        { title: "AURAK Awarded ACCA Accreditation for two undergraduate degree programs", date: "09 - 01 - 2022", desc: "The American University of Ras Al Khaimah (AURAK) recently celebrated..." },
    ]
    return (
        <div>
            <Header />
            <Banner title={"Your Future Starts Here  ___________________"} background={"/images/homebanner.png"} read={true} type="home" />
            <div className="rank-columns">
                <div className="main-container">
                    <div className="row">
                        <div className="col-sm-6 col-12 py-5 rank-column">
                            <p className="ranked">Ranked</p>
                            <div className="d-flex align-items-center">
                                <p className="number">#11</p>
                                <svg className="mx-3" width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38 0H0V1H38V0Z" fill="white" />
                                </svg>
                                <p className="year mb-0">RS Ranking 2022</p>
                            </div>
                            <p className="place">IN THE UNITED ARAB EMIRATES</p>
                        </div>
                        <div className="col-sm-6 col-12 py-5 rank-column d-block d-sm-flex flex-column align-items-end">
                            <div className="">
                                <p className="ranked">Ranked</p>
                                <div className="d-flex align-items-center">
                                    <p className="number">#49</p>
                                    <svg className="mx-3" width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38 0H0V1H38V0Z" fill="white" />
                                    </svg>
                                    <p className="year mb-0">RS Ranking 2022</p>
                                </div>
                                <p className="place">IN THE ARAB REGION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-program position-relative">
                <h3 className="banner-title text-center w-100 mx-auto text-uppercase">
                    Explore <br />
                    Our Programs
                </h3>
                <div className="position-absolute program-button-container d-flex justify-content-center align-items-end mt-auto mx-auto w-100">
                    <div className="d-flex">
                        <div className="program-button d-flex align-items-center justify-content-between">
                            <div className="rounded-circle border">
                                <img src="/images/uparrow.png" />
                            </div>
                            <p className="text-white mb-0">Bachelors</p>
                        </div>
                        <div className="program-button d-flex align-items-center justify-content-between">
                            <p className="text-white mb-0">Masters</p>
                            <div className="rounded-circle border">
                                <img src="/images/uparrow.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="program-search-container position-absolute d-flex justify-content-between align-items-center">
                    <img src="/images/redsearch.png" />
                    <p className="mb-0">
                        Search Program Here
                    </p>
                </div>
            </div>
            <div className="news-events">
                <div className="main-container mt-5">
                    <div className="d-flex">
                        <h4 className="banner-title text-dark">Latest News</h4>
                        <button className="btn mx-3 btn-light border text-uppercase">View All</button>
                        <div className="d-flex justify-content-end right-buttons">
                            <button className="btn news-btn mx-3 text-uppercase">News</button>
                            <button className="btn btn-light border mx-3 text-uppercase">Events</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <h4 className="banner-title text-dark">& Events</h4>
                        <div className="line-1 w-75"></div>
                    </div>
                </div>
                <div className="row w-100 mt-4">
                    <div className="col-5 left-news bg-red px-0">
                        <img src="/images/newsimage.png" className="w-100" />
                        <div className="text-area main-container py-4">
                            <p className="date text-white">09 - 01 - 2022</p>
                            <p className="title text-white">Entrepreneurship Talk</p>
                            <p className="desc text-white">Professor Hariclea Zengos, a distinguished professor of literature...</p>
                            <Link to="" className="read-btn text-white d-flex align-items-center">READ MORE <img src="/images/readarrow.png" className="mx-1" /></Link>
                        </div>
                    </div>
                    <div className="col-7">
                        {data.map(item => {
                            return (<div className="right-news main-container">
                                <p className="date">{item.date}</p>
                                <p className="title">{item.title}</p>
                                <p className="desc">{item.desc}</p>
                                <Link to="" className="read-btn text-dark d-flex align-items-center">READ MORE <img src="/images/red_down.png" className="mx-1" /></Link>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className="accreditation bg-grey py-5">
                <div className="main-container">
                    <h4 className="banner-title text-uppercase">Accreditation</h4>
                    <div className="row mt-5">
                        <div className="col-sm-6 col-12">
                            <div className="single-accredit-1 mr-3 d-flex justify-content-between align-items-center">
                                <img className="image-logo" src="/images/accreditimage1.png" />
                                <img className="text-image" src="/images/accredit1.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="single-accredit-2  ml-3 d-flex justify-content-between align-items-center">
                                <img className="text-image" src="/images/accredit2.png" />
                                <img className="image-logo" src="/images/accreditimage2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;