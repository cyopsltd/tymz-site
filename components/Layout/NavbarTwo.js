import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";
import Logo from "../Logo/Logo";

export default function NavbarTwo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header-1 style-2">
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
                    <a href="#">demos</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/">Home 1</Link>
                      </li>
                      <li>
                        <Link href="/index-two">Home 2</Link>
                      </li>
                      <li>
                        <Link href="/index-three">Home 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/faq">faq</Link>
                      </li>
                      <li>
                        <Link href="/team">team</Link>
                      </li>
                      <li>
                        <Link href="/projects">portfolio</Link>
                      </li>
                      <li>
                        <Link href="/pricing">pricing</Link>
                      </li>
                      <li>
                        <Link href="/404">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/news">News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right-element text-white">
              <a href="#">login</a>
              <Link href="/contact" className="theme-btn black">
                get started
              </Link>
            </div>
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
                    {menuItems.map((menu, index) => (
                      <MenuItems isOpenMenu={isOpen} key={index} items={menu} />
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="theme-btn d-block mt-4 text-center ms-0"
                  >
                    get started
                  </Link>
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
