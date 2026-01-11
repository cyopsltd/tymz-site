import { useRef } from "react";
import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function TestimonialTwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 950,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <section className="testimonial-carousel-wrapper section-bg section-padding fix">
      <div className="container">
        <div className="row fix align-items-center">
          <div className="col-lg-8">
            <div className="block-contents fw500 text-center text-lg-start">
              <div className="section-title">
                <h2 className="wow fadeInLeft" data-wow-duration="1.1s">
                  People are talking
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
            <div className="testimoinial-nav style-2">
              <div
                onClick={() => sliderRef.current?.slickPrev()}
                className="testimonial-nav-prev"
              >
                <BsArrowLeft className="icon-arrow-right" />
              </div>
              <div
                onClick={() => sliderRef.current?.slickNext()}
                className="testimonial-nav-next"
              >
                <BsArrowRight className="icon-arrow-left" />
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-nav-carousel-active">
          <Slider ref={sliderRef} {...settings}>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/3.jpg)" }}
              ></div>
              <div className="feedback">
                “Scheduling collaborations used to be chaotic, but Tymz makes
                getting everyone aligned on a time surprisingly effortless.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Priya K.</h6>
                  <span>Content Creator</span>
                </div>
              </div>
            </div>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/2.jpg)" }}
              ></div>
              <div className="feedback">
                “I use Tymz to coordinate customer visits and it’s easily saved
                me hours every single week.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Karen R.</h6>
                  <span>Hair Stylist</span>
                </div>
              </div>
            </div>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/4.jpg)" }}
              ></div>
              <div className="feedback">
                “Tymz is the fastest way I’ve found to get cross-functional
                teams to settle on meeting times without endless Slack threads.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Daniel S.</h6>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/5.jpg)" }}
              ></div>
              <div className="feedback">
                “Whether it’s school events or family plans, Tymz makes
                coordinating busy schedules feel simple again.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Christy G.</h6>
                  <span>Parent</span>
                </div>
              </div>
            </div>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/6.jpg)" }}
              ></div>
              <div className="feedback">
                “Group projects are way less stressful now that Tymz handles the
                scheduling instead of one person chasing everyone.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Megan L.</h6>
                  <span>Graduate Student</span>
                </div>
              </div>
            </div>
            <div className="single-testimoinal-box">
              <div
                className="client-img bg-cover"
                style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
              ></div>
              <div className="feedback">
                “Tymz turned what used to be a painful back-and-forth over
                meeting times into something my whole team actually agrees on in
                minutes.”
              </div>
              <div className="client-info">
                <div className="client-name">
                  <h6>Alex M.</h6>
                  <span>Entreprenuer</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
          <div className="testimoinial-nav style-2">
            <div
              onClick={() => sliderRef.current?.slickPrev()}
              className="testimonial-nav-prev"
            >
              <BsArrowLeft className="icon-arrow-right" />
            </div>
            <div
              onClick={() => sliderRef.current?.slickNext()}
              className="testimonial-nav-next"
            >
              <BsArrowRight className="icon-arrow-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
