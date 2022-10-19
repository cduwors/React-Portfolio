import React from "react";
import NavTabs from "../../NavTabs";

export default function Header( { currentPage, setCurrentPage }) {
	return (
		<header className="flex-row">
			<div>
				<h2>Christina DuWors</h2>
			</div>
			<div>
				<h4>Full Stack Web Developer</h4>
			</div>
			<NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</header>
	);
}
