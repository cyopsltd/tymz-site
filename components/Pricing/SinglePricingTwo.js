import Link from "next/link";

export default function SinglePriceTwo({ price, features }) {
  return (
    <div
      className={`single-pricing-package style-2 ${
        price.popular ? "active" : ""
      }`}
    >
      {price.popular ? (
        <div className="package-bage wow fadeInDown" data-wow-delay=".9s">
          <span>Popular</span>
        </div>
      ) : (
        ""
      )}
      <div className="pricing-head">
        <div className="pricing-name">
          <h4>{price.plan}</h4>
        </div>
        <div className="pricing-vale d-flex">
          <h2>
            $<span>{price.price}</span>
          </h2>
          <p>/Per Month</p>
        </div>
      </div>
      <div className="features-list">
        <ul>
          {features.map((feature, index) => {
            const hasFeature = feature[price.tier];
            return (
              <li key={index} className={!hasFeature ? "no" : ""}>
                {feature.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="buy-package-btn">
        <Link
          href="https://app.tymz.ai/signup"
          className={`theme-btn second-color ${
            !price.popular ? "minimal-btn" : ""
          }`}
          style={{ borderRadius: "50px" }}
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
}
