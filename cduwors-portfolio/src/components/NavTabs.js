import React from "react";
import Header from "./pages/Header";

function NavTabs({ currentPage, handlePageChange }) {
	return (
		<section>
			{/* <Header></Header> */}
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a
							href="#about"
							onClick={() => handlePageChange("About")}
							className={
								currentPage === "About" ? "nav-link active" : "nav-link"
							}>
							About
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#portfolio"
							onClick={() => handlePageChange("Portfolio")}
							className={
								currentPage === "Portfolio" ? "nav-link active" : "nav-link"
							}>
							About
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#resume"
							onClick={() => handlePageChange("Resume")}
							className={
								currentPage === "Resume" ? "nav-link active" : "nav-link"
							}>
							Resumé
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#contact"
							onClick={() => handlePageChange("Contact")}
							className={
								currentPage === "Contact" ? "nav-link active" : "nav-link"
							}>
							Contact Me!
						</a>
					</li>

					{/* <li className={`mx-2 ${contactSelected && "navActive"}`}>
						<a onClick={() => setContactSelected(true)}>Contact</a>
					</li> */}
				</ul>
			</nav>
		</section>
	);
}

export default NavTabs;
