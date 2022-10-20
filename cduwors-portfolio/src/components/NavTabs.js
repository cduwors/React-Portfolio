import React from "react";

function NavTabs({ currentPage, setCurrentPage }) {
	console.log(currentPage);

	return (
		<section>
			<nav>
				<ul className="flex-row">
					<li className="mx-2 navList">
						<a
							href="#about"
							onClick={() => setCurrentPage("About")}
							className={
								currentPage === "About" ? "nav-link active" : "nav-link" && "navActive"
							}>
							About Me
						</a>
					</li>

					<li className="mx-2 navList">
						<a
							href="#portfolio"
							onClick={() => setCurrentPage("Portfolio")}
							className={
								currentPage === "Portfolio" ? "nav-link active" : "nav-link" && "navActive"
							}>
							Portfolio
						</a>
					</li>

					<li className="mx-2 navList">
						<a
							href="#resume"
							onClick={() => setCurrentPage("Resume")}
							className={
								currentPage === "Resume" ? "nav-link active" : "nav-link" && "navActive"
							}>
							Resumé
						</a>
					</li>

					<li className="mx-2 navList">
						<a
							href="#contact"
							onClick={() => setCurrentPage("Contact")}
							className={
								currentPage === "Contact" ? "nav-link active" : "nav-link" && "navActive"
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
