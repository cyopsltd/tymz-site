import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
export default function Pagination() {
	return (
        <div className="page-nav-wrap wow fadeInUp mt-80 text-center" data-wow-delay=".3s">
            <ul>
				<li className="current-page">
					<Link href="#">
						1
					</Link>
				</li>
				<li>
					<Link href="#">
						2
					</Link>
				</li>
				<li>
					<Link href="#">
						3
					</Link>
				</li>
				<li>
					<Link href="#">
						4
					</Link>
				</li>
				<li>
					<Link href="#">

                        <HiArrowRight />

                    </Link>
				</li>
			</ul>
        </div>
    );
}
