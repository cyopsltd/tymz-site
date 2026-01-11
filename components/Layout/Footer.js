import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div
                className="single-footer-widget wow fadeInLeft text-center"
                data-wow-delay=".2s"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0 10px",
                  fontSize: "16px",
                  lineHeight: "1",
                }}
              >
                <Link href="/contact">Contact</Link>
                <span style={{ color: "#617686" }}>|</span>
                <Link href="https://app.tymz.ai/privacy">Privacy</Link>
                <span style={{ color: "#617686" }}>|</span>
                <Link href="https://app.tymz.ai/terms">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrapper">
        <div className="container">
          <div className="footer-bottom-content d-md-flex justify-content-between">
            <div
              className="site-copyright wow fadeInUp"
              data-wow-delay=".2"
              data-wow-duration="1s"
            >
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <Link href="#">Sage Finley, Inc.</Link> All Rights Reserved.
              </p>
            </div>
            <div
              className="social-links mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".3"
              data-wow-duration="1s"
            >
              {/* <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaLinkedinIn />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
