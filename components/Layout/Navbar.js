import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-2 col-sm-5 col-md-4 col-6">
            <Logo />
          </div>
          <div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
            <div className="menu-wrap">
              <div className="main-menu">
                <ul>
                  <li>
                    <Link href="/#features">Features</Link>
                  </li>
                  <li>
                    <Link href="/#pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/#faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="header-right-element">
              <a href="https://app.tymz.ai/login">Sign In</a>
              <Link
                href="https://app.tymz.ai/signup"
                className="theme-btn black"
                style={{ color: "#ffffff" }}
              >
                get started
              </Link>
            </div> */}
          </div>
          <div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
            <div className="mobile-nav-wrap">
              <div id="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
                <FaBars />
              </div>

              <div className={`mobile-nav ${isOpen ? "show" : ""}`}>
                <button
                  type="button"
                  className="close-nav"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <FaTimesCircle />
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    <li>
                      <Link href="/#features">Features</Link>
                    </li>
                    <li>
                      <Link href="/#pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/#faq">FAQ</Link>
                    </li>
                  </ul>

                  {/* <a
                    href="https://app.tymz.ai/login"
                    className="d-block mt-4 text-start"
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      paddingLeft: "15px",
                    }}
                  >
                    Sign In
                  </a>

                  <Link
                    href="https://app.tymz.ai/signup"
                    className="theme-btn d-block mt-3 text-center ms-0"
                    style={{ color: "#ffffff" }}
                  >
                    get started
                  </Link> */}
                </nav>
              </div>
            </div>
            <div
              className={`overlay ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen((prev) => !prev)}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
