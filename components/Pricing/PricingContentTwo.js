import PricingTwo from "./PricingTwo";

const sharedFeatures = [
  { name: "Unlimited temporary scheduling links", free: true, premium: true },
  { name: "Unlimited permanent scheduling links", free: true, premium: true },
  { name: "Book unlimited events", free: true, premium: true },
  { name: "Coordinate multiperson events", free: true, premium: true },
  {
    name: "Participants can suggest alternate times",
    free: true,
    premium: true,
  },
  { name: "Coordinate between timezones", free: true, premium: true },
  { name: "Custom styled booking pages", free: false, premium: true },
  { name: "Use multiple avatars", free: false, premium: true },
  { name: "Collect information with custom forms", free: false, premium: true },
  { name: "Book past 30 days in advance", free: false, premium: true },
  { name: "Advanced scheduling options", free: false, premium: true },
  { name: "Priority support", free: false, premium: true },
];

const pricingData = [
  {
    id: 1,
    plan: "Free Forever",
    price: 0,
    tier: "free",
    popular: false,
  },
  {
    id: 2,
    plan: "Premium",
    price: 6,
    tier: "premium",
    popular: false,
  },
  {
    id: 3,
    plan: "Free Forever",
    price: 0,
    tier: "free",
    popular: false,
  },
  {
    id: 4,
    plan: "Premium",
    price: 5,
    tier: "premium",
    popular: true,
  },
];

export default function PricingContentTwo() {
  return (
    <section className="package-pricing-wrapper fix section-padding">
      <div className="container">
        <div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
          <div className="block-contents fw500">
            <div className="section-title">
              <h2 className="wow fadeInUp">Did we mention it's free?</h2>
              <p className="wow fadeInUp pt-4" data-wow-delay=".3s">
                Use Tymz for free or unlock advanced features, custom branding,
                and priority support to take your scheduling to the next level.
              </p>
            </div>
          </div>
        </div>

        <PricingTwo content={pricingData} features={sharedFeatures} />
      </div>
    </section>
  );
}
