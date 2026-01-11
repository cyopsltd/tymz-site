import React from "react";

export default function ContentBlockThree() {
  return (
    <section className="content-block theme-bg section-padding fw500">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pe-lg-0 col-12">
            <div className="mobile-block">
              <img src="/img/home3/mobile-block.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 offset-lg-1 col-12 ps-lg-5 pe-lg-5">
            <div className="block-contents ms-xl-3">
              <div
                className="section-title mb-4 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <h2>Get started in minutes</h2>
              </div>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Whether you're setting up a simple one-on-one meeting or
                coordinating a complex group event, Tymz makes it effortless.
              </p>
            </div>
            <div className="step-features">
              <div
                className="single-featured-item item1 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h4>Sign up</h4>
                <p>
                  Start on the web or download from the Apple App Store or
                  Google Play Store.
                </p>
              </div>
              <div
                className="single-featured-item item2 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4>Set your availability</h4>
                <p>
                  Confirm the times you're available so others can book time
                  with you.
                </p>
              </div>
              <div
                className="single-featured-item item3 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <h4>Share your booking link</h4>
                <p>
                  Create calendars, book meetings, or coordinate group events
                  with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
