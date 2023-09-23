import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
// import DefaultFooter from "../../components/footer/DefaultFooter";
import FaqAccordion from "../../components/pages-com/FaqAccordion";
import Link from "next/link";
import Footer from "../../components/footer/Footer";
const Faq = () => {
  return (
    <>
      <Seo pageTitle="Faq's" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                
                <h2 className="main-title fs-54 fw-500 tx-dark">
                  Questions &amp; Answers
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Three
			============================================== 
			*/}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className="bg-wrapper position-relative" data-aos="fade-up">
              <FaqAccordion />
              <img
                src="/images/shape/shape_133.svg"
                alt="shape"
                className="lazy-img shapes shape-one"
              />
            </div>
            {/* /.bg-wrapper */}

            {/* <div className="text-center  mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">Didn’t get your answer?</h3>
              <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
                Contact us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      {/* <DefaultFooter /> */}
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
    </>
  );
};

export default Faq;
