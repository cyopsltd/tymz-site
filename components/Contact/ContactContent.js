import Form from "./Form";

export default function ContactContent() {
  return (
    <section className="contact-us-wrapper section-padding">
      <div className="container">
        <div className="row mt-1 mt-lg-1">
          <div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
            <div className="block-contents">
              <div className="section-title mb-4">
                <h2 className="wow fadeInUp">Get in touch now!</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mx-auto pls-lg-4 wow fadeInUp order-1 order-lg-2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
