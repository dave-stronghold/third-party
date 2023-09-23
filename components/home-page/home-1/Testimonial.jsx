import Slider from "react-slick";
import testimonial from "../../../data/testimonial";
import Image from "next/image";
import Partners from "../home-12/Partners";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
  nextArrow: <></>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
    <div className="container">
          <div className="row">
            <div className=" brand-left col-lg-6">
             
                <div className="brand-left">
                  {/* <div className="sc-title-two text-uppercase">SOLUTION</div> */}
                  <Partners/>
                </div>
                {/* /.title-style-ten */}
              
              
           
              {/* /.block-style-seven */}
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              {/* testimonial column */}
              <Slider {...settings}>
        {testimonial.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven">
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="tx-dark m0">{item.title}</h4>
                  {/* <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul> */}
                </div>
                <img src="images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark">{item.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
                <Image
                  width={60}
                  height={60}
                  alt="testimonial avatar"
                  src={item.image}
                  className="rounded-circle"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
            </div>
          </div>
        </div>



      
    </>
  );
};

export default Testimonial;
