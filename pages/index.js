import Head from "next/head";
import FaqContent from "../components/faq/FaqContent";
import HeroThree from "../components/Hero/HeroThree";
import ContentBlockOne from "../components/HomeThree/ContentBlockOne";
import ContentBlockThree from "../components/HomeThree/ContentBlockThree";
import ContentBlockTwo from "../components/HomeThree/ContentBlockTwo";
import Cta from "../components/HomeThree/Cta";
import PricingContentTwo from "../components/Pricing/PricingContentTwo";
import FeaturesFour from "./../components/Features/FeaturesFour";
import TestimonialTwo from "./../components/Testimonial/TestimonialTwo";

export default function indexThree() {
  return (
    <>
      <Head>
        <title>Tymz</title>
      </Head>
      <HeroThree />
      <div id="features">
        <FeaturesFour />
      </div>
      <Cta />
      <ContentBlockOne />
      <ContentBlockTwo />
      <ContentBlockThree />
      <div id="pricing">
        <PricingContentTwo />
      </div>
      <TestimonialTwo />
      <div id="faq">
        <FaqContent />
      </div>
    </>
  );
}
