import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function FooterTwo() {
	return (
        <footer className="footer-wrapper footer-2">
            <div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/" className="footer-logo d-block">

                                        <img src="/img/footer-3.svg" alt="xmoze" />

                                    </Link>
									<p>
										Xmoze helps millions of people get the best Wordpress theme design and offers
										software reviews, ratings, comprehensive services.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".2s">
								<div className="widget-title">
									<h5>Company</h5>
								</div>
								<ul>
									<li>
										<Link href="/about">
											About xmoze
										</Link>
									</li>
									<li>
										<Link href="/contact">
											Contact & support
										</Link>
									</li>
									<li>
										<Link href="/#">
											Setting & privacy
										</Link>
									</li>
									<li>
										<Link href="#">
											Setting & privacy
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Services</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											Incident responder
										</Link>
									</li>
									<li>
										<Link href="#">
											Secure managed IT
										</Link>
									</li>
									<li>
										<Link href="#">
											Check website Url
										</Link>
									</li>
									<li>
										<Link href="#">
											Locker security
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Resources</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											Payment plans
										</Link>
									</li>
									<li>
										<Link href="#">
											Blogs & guides
										</Link>
									</li>
									<li>
										<Link href="#">
											Premium support
										</Link>
									</li>
									<li>
										<Link href="#">
											Our products
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2022{" "}
								<Link href="#">
									Xmooze Theme
								</Link>{" "}
								All Rights Reserved.
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="#">

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

                            </Link>
						</div>
					</div>
				</div>
			</div>
        </footer>
    );
}
