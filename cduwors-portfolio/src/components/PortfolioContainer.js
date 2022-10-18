import React, { useState } from "react";
import Header from "./pages/Header";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Footer from "./pages/Footer";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("About");
	const renderPage = () => {
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "Resumé") {
			return <Resume />;
		}
		return <ContactForm />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<body>
			<div className="wrapper">

				<Header></Header>

				<NavTabs
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
				{renderPage()}
			</div>
			<Footer></Footer>
		</body>
	);
}
