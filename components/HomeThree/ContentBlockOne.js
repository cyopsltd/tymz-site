import React from "react";

export default function ContentBlockOne() {
  return (
    <section className="content-block style-2 section-padding fw500">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 pe-xl-0">
            <div className="block-img">
              <img src="/img/home3/block1.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-6 mt-5 mt-xl-0 offset-xl-1 ps-xl-5">
            <div className="block-contents">
              <div
                className="section-title mb-4 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <h2>Experience the power of cat herder mode</h2>
              </div>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                Turn group scheduling chaos into clarity by effortlessly guiding
                everyone to agree on a time. No chasing, no confusion, just
                faster coordination for any event.
              </p>
              <ul className="checked-list bg-checked">
                <li className="wow fadeInUp" data-wow-delay=".5s">
                  Ends scheduling back and forth
                </li>
                <li className="wow fadeInUp" data-wow-delay=".7s">
                  Brings transparency to group availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
