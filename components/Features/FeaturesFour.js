import { FaCalendar, FaClock, FaUser, FaUsers } from "react-icons/fa";
export default function FeaturesFour() {
  return (
    <section className="strong-services-wrapper section-bg section-padding fw500">
      <div className="container">
        <div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
          <div className="block-contents">
            <div className="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>Features to meet all your scheduling needs</h2>
              <p>
                In mobile banking you get all kinds of modern services It helps
                you focus on your core business and benefit.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="strong-service-card card1">
              <div className="icon">
                <FaUser />
              </div>
              <div className="service-title">
                <h3>One-on-one meetings</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="strong-service-card card2">
              <div className="icon">
                <FaUsers />
              </div>
              <div className="service-title">
                <h3>Coordinate group events</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="strong-service-card card3">
              <div className="icon">
                <FaCalendar />
              </div>
              <div className="service-title">
                <h3>Create one-off calendars</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="strong-service-card card4">
              <div className="icon">
                <FaClock />
              </div>
              <div className="service-title">
                <h3>Personalize your designs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
