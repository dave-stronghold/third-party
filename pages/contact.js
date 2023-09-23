import Seo from "../components/common/Seo";
// import BlockContact from "../components/contact/BlockContact";
// import ContactForm from "../components/contact/ContactForm";
// import Map from "../components/contact/Map";
import Footer from "../components/footer/Footer";
import DefaultHeader from "../components/header/DefaulHeader";
import Timelines from "../components/timeline/timelines";
import Link from "next/link";
import { FiChevronsDown } from "react-icons/fi";
const contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevents default form submission
    // add your form submission logic here
  };
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaultHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="footer-style-three position-relative">
        <div className="container">
          <div className="row">
            <div className="  col-md-6 m-auto text-center">
              <div className="title-style-four" data-aos="fade-up">
                <h2 className="main-title fw-500 text-white mt-16">
                  Already using our Service? Track on the Go.
                </h2>
              </div>
              {/* /.title-style-four */}
              <p
                className="text-lg text-white mt-35 mb-70 lg-mt-30 lg-mb-50"
                data-data-aos="fade-up"
              >
                Try it risk free — we don’t charge processing fees.
              </p>
              <div className="subscribe-form m-auto wow fadeInUp ">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  className="position-relative mb-40"
                >
                  <input type="string" placeholder="Enter Transaction ID" />
                  <button className="tran3s position-absolute fw-500">
                    TRACK
                  </button>
                </form>
                <p className="mb-40 mt-40 text-white icon-down">
                  Click here to download{"  "}
                  <FiChevronsDown />
                </p>
              </div>
            </div>
            <div className="tcolumn col-md-5 m-auto text-center">
              <div className="tcon">
                <Timelines />
              </div>
            </div>
            {/* /.subscribe-form */}
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}

      {/* End .container */}

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

                {/* <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
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

export default contact;
