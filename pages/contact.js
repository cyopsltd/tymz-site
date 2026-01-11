import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <ContactContent />
    </>
  );
}
