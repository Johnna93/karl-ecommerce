import React from "react";
import Slider from "react-slick"; // Import react-slick

// Testimonials component
function Testimonials() {
  // Settings for the slider
  const settings = {
    dots: 0, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (3 seconds)
  };

  return (
    <section>
      <div id="wrapper">
        <section className="karl-testimonials-area section_padding_100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section_heading text-center">
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                {/* Slider component */}
                <Slider {...settings} className="karl-testimonials-slides">
                  <div className="single-testimonial-area text-center">
                    <span className="quote">"</span>
                    <h6>
                      Nunc pulvinar molestie sem id blandit. Nunc venenatis
                      interdum mollis. Aliquam finibus nulla quam, a iaculis
                      justo finibus non. Suspendisse in fermentum nunc. Nunc
                      pulvinar molestie sem id blandit. Nunc venenatis interdum
                      mollis.
                    </h6>
                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                      <div className="tes-thumbnail">
                        <img src="assets/img/bg-img/tes-1.jpg" alt="" />
                      </div>
                      <div className="testi-data">
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial-area text-center">
                    <span className="quote">"</span>
                    <h6>
                      Nunc pulvinar molestie sem id blandit. Nunc venenatis
                      interdum mollis. Aliquam finibus nulla quam, a iaculis
                      justo finibus non. Suspendisse in fermentum nunc. Nunc
                      pulvinar molestie sem id blandit. Nunc venenatis interdum
                      mollis.
                    </h6>
                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                      <div className="tes-thumbnail">
                        <img src="assets/img/bg-img/tes-1.jpg" alt="" />
                      </div>
                      <div className="testi-data">
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial-area text-center">
                    <span className="quote">"</span>
                    <h6>
                      Nunc pulvinar molestie sem id blandit. Nunc venenatis
                      interdum mollis. Aliquam finibus nulla quam, a iaculis
                      justo finibus non. Suspendisse in fermentum nunc. Nunc
                      pulvinar molestie sem id blandit. Nunc venenatis interdum
                      mollis.
                    </h6>
                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                      <div className="tes-thumbnail">
                        <img src="assets/img/bg-img/tes-1.jpg" alt="" />
                      </div>
                      <div className="testi-data">
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonials;
