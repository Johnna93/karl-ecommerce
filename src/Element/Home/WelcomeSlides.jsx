import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const WelcomSlides = () => {
  return (
    <section className="welcome_area">
      <OwlCarousel
        className="welcome_slides owl-carousel"
        loop
        margin={10}
        items={1}
        autoplay
        autoplayTimeout={5000}
        autoplayHoverPause
      >
        {/* Single Slide Start */}
        <div
          className="single_slide height-800 bg-img background-overlay"
          style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="welcome_slide_text">
                  <h6
                    data-animation="bounceInDown"
                    data-delay="0"
                    data-duration="500ms"
                  >
                    * Only today we offer free shipping
                  </h6>
                  <h2
                    data-animation="fadeInUp"
                    data-delay="500ms"
                    data-duration="500ms"
                  >
                    Fashion Trends
                  </h2>
                  <Link
                    href="#"
                    className="btn karl-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                    data-duration="500ms"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Slide Start */}
        <div
          className="single_slide height-800 bg-img background-overlay"
          style={{ backgroundImage: "url(assets/img/bg-img/bg-4.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="welcome_slide_text">
                  <h6
                    data-animation="fadeInDown"
                    data-delay="0"
                    data-duration="500ms"
                  >
                    * Only today we offer free shipping
                  </h6>
                  <h2
                    data-animation="fadeInUp"
                    data-delay="500ms"
                    data-duration="500ms"
                  >
                    Summer Collection
                  </h2>
                  <Link
                    href="#"
                    className="btn karl-btn"
                    data-animation="fadeInLeftBig"
                    data-delay="1s"
                    data-duration="500ms"
                  >
                    Check Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Slide Start */}
        <div
          className="single_slide height-800 bg-img background-overlay"
          style={{ backgroundImage: "url(assets/img/bg-img/bg-2.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="welcome_slide_text">
                  <h6
                    data-animation="fadeInDown"
                    data-delay="0"
                    data-duration="500ms"
                  >
                    * Only today we offer free shipping
                  </h6>
                  <h2
                    data-animation="bounceInDown"
                    data-delay="500ms"
                    data-duration="500ms"
                  >
                    Women Fashion
                  </h2>
                  <Link
                    href="#"
                    className="btn karl-btn"
                    data-animation="fadeInRightBig"
                    data-delay="1s"
                    data-duration="500ms"
                  >
                    Check Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default WelcomSlides;
