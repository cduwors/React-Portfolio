import React from "react";

function NavTabs({ currentPage, setCurrentPage }) {
	console.log(currentPage);

	return (
		<section>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a
							href="#about"
							onClick={() => setCurrentPage("About")}
							className={
								currentPage === "About" ? "nav-link active" : "nav-link"
							}>
							About Me
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#portfolio"
							onClick={() => setCurrentPage("Portfolio")}
							className={
								currentPage === "Portfolio" ? "nav-link active" : "nav-link"
							}>
							Portfolio
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#resume"
							onClick={() => setCurrentPage("Resume")}
							className={
								currentPage === "Resume" ? "nav-link active" : "nav-link"
							}>
							Resumé
						</a>
					</li>

					<li className="mx-2">
						<a
							href="#contact"
							onClick={() => setCurrentPage("Contact")}
							className={
								currentPage === "Contact" ? "nav-link active" : "nav-link"
							}>
							Contact Me!
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default NavTabs;
