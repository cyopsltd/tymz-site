import Accordion from "../Accordion/Accordion";

export const faqsData = [
  {
    id: 1,
    question: "Do recipients need a Tymz account to respond?",
    answer:
      "No! Recipients don't need to create an account or download anything. They simply click your link, view your available times, and select what works for them. It's completely frictionless for your guests.",
  },
  {
    id: 2,
    question: "Is Tymz really free forever?",
    answer:
      "Yes! Our core features — creating calendars, booking meetings, and coordinating group events — are free forever. We believe scheduling shouldn't cost money. We offer premium features for power users and people who want to add more style, but the essential tools you need will always be free.",
  },
  {
    id: 3,
    question:
      "Can I let people suggest alternate times if none of my available times work for them?",
    answer:
      'Absolutely! When you create a calendar or event, you can enable the "Suggest new times" option. This lets recipients propose times that work better for them if none of your available options fit their schedule. You\'ll be notified of their suggestions and can accept or propose different options.',
  },
  {
    id: 4,
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    id: 5,
    question: "Is there a free trial for Premium?",
    answer:
      "All new users start with a 7-day free trial of the Premium plan. No credit card required.",
  },
  {
    id: 6,
    question: "What's the difference between Simple mode and Cat Herder mode?",
    answer:
      "Simple mode is perfect for quick scheduling — create a calendar, share it, and let people pick times. It's great for one-on-one meetings or straightforward bookings. Cat Herder mode is designed for group coordination. It helps you find times that work for multiple people, track responses, and manage complex scheduling scenarios. Think of it as your assistant for organizing busy groups.",
  },
];

export default function FaqContent() {
  return (
    <section className="faq-ask-wrapper section-padding">
      <div className="container">
        <div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
          <div className="block-contents fw500">
            <div className="section-title wow fadeInUp" data-wow-duration="1s">
              <h2>Tymz is fast and easy</h2>
            </div>
          </div>
        </div>

        <div className="row faq-ask">
          <div className="col-lg-6 col-12">
            <div className="faq-accordion">
              <Accordion content={faqsData.slice(0, 3)} />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="faq-accordion">
              <Accordion content={faqsData.slice(3, 6)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
