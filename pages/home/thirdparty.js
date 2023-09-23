import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import AppBanner from "../../components/home-page/home-1/AppBanner";
// import Banner from "../../components/home-page/home-1/Banner";
// import Block from "../../components/home-page/home-1/Block";
// import Blog from "../../components/home-page/home-1/Blog";
// import ContactForm from "../../components/home-page/home-1/ContactForm";
// import Feature from "../../components/home-page/home-1/Feature";
// import Hero from "../../components/home-page/home-1/Hero";
// import IntroAbout from "../../components/home-page/home-1/IntroAbout";
// import Service from "../../components/home-page/home-1/Service";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import Faq from "../../components/home-page/home-2/Faq";
import Features from "../../components/home-page/home-6/Features";
// import Image from "next/image";
import VideoBlock from "../../components/about/VideoBlock";

import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  vertical: true,
  slidesToShow: 1,
  // slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: <></>,
  nextArrow: <></>,
  centermode: false,
};
const ThirdParty = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      <DefaulHeader />
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}
      {/* <Hero /> */}
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  {/* <div className="sc-title-two text-uppercase">SOLUTION</div> */}
                  <Slider {...settings}>
                    <div className="slide">
                      <h3 className="main-title fw-500 tx-dark w2">
                        Is your seller not providing cash on delivery?
                      </h3>
                    </div>
                    <div className="slide">
                      <h3 className="main-title fw-500 tx-dark w2">
                        Is Your Seller asking 100% Payment before delivering
                        things?
                      </h3>
                    </div>
                    <div className="slide">
                      <h3 className="main-title fw-500 tx-dark w2">
                        Are you in risk of sending money to unknown account?
                      </h3>
                    </div>
                  </Slider>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Don’t worry! 3rdParty is a digital ESCROW to mediate and
                  protect your payment until the deal is successfully closed
                  between two parties.
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <button
                    href="/page-menu/about-us-v1"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    className="fw-500 tran3s"
                  >
                    Choose Us &nbsp;
                    <i className="fa-solid fa-angle-right" />
                  </button>
                </div>
              </div>
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              {/* Hero Image */}
              <img src="/images/assets/hero.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title-style-one text-center mt-130 mb-50 lg-mb-20">
          <h2 className="main-title fw-500 tx-dark m0">
            What is <span id="hl">ESCROW?</span>
          </h2>
        </div>
      </div>
      <VideoBlock />

      {/* Features*/}
      <div className="fancy-feature-six position-relative mt-200 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Why <br />
                  Choose
                  <br />
                  <span
                    style={{ color: "#F4313F" }}
                    className="d-inline-block position-relative"
                  >
                    3rdParty?
                  </span>
                </h2>
              </div>
              {/* /.title-style-three */}
            </div>
            <Features />
          </div>
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div>
      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-45">
            <h2 className="main-title fw-500 tx-dark m0">
              Most Trusted <span id="hl">ESCROW</span> Service
            </h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>

          {/* /.slider-wrapper */}
        </div>
        {/* /.inner-content */}
      </div>
      {/* /.feedback-section-eleven */}
      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}

      {/* /.fancy-short-banner-thirteen */}

      {/* Got Questions?*/}
      <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div
                className="title-style-seven text-center pb-120 lg-pb-50"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark">
                  Got questions? <br /> Well, we&lsquo;ve got &nbsp;
                  <span className="position-relative d-inline-block">
                    answers <img src="/images/shape/shape_99.svg" alt="" />
                  </span>
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
            <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
              <Faq />

              <div className="text-center  mt-80 lg-mt-50"></div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      <div
        className="fancy-short-banner-sixteen mt-0 lg-mt-0 mb-90"
        // data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Want to try 3rdParty?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      data-bs-toggle="modal"
                      data-bs-target="#contactModal"
                      href="/"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo mb-20">
                  <img src="/images/logo/third.png" alt="logo" width={140} />
                </div>

                {/* <p className="text-white opacity-50 fs-15 mt-10 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{"  "}
                  3rdParty.
                </p> */}
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        {/* <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        /> */}
      </div>
      {/* /.footer-style-ten */}
    </>
  );
};

export default ThirdParty;
