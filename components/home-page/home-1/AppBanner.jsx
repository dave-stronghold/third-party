import WhyChoose from "../../../components/home-page/home-1/WhyChoose"
const AppBanner = () => {
  const features = [
    "Compare different insurance Item",
    "Buy, store and share all your policies online",
    "Email & Live chat.",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];

  return (
    <div className="row align-items-center">
       <div
              className="col-lg-6 ms-auto "
              // data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  {/* <div className="sc-title text-uppercase"></div> */}
                  <h2 className="main-title fw-500 tx-dark m0">
                  4 Easy steps for 
Payment <span id="hl">Protection</span>
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
      {/* End col-6 */}

      <div className="col-lg-6 wow fadeInRight">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />
          <img
            src="images/media/img_56.png"
            alt=""
            className="lazy-img screen-two"
          />
          <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
