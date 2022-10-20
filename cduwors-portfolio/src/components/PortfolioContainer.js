import React, { useState } from "react";
import Header from "./pages/Header";
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
		if (currentPage === "Resume") {
			return <Resume />;
		}
		return <ContactForm />;
	};

	return (
		<div className="body">
			<div className="wrapper">
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage} ></Header>

				{renderPage()}
				<Footer></Footer>
			</div>
		</div>
	);
}
