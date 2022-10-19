import React from "react";
import pdf from "../../../assets/resume2021.pdf";

export default function Resume() {
	return (
		<section className="wrapper pageContent">
			<div>
				<h2 style={{ color: "orange" }}>My Resumé</h2>
			</div>
			<div>
				<a href={pdf} target="_blank" rel="noreferrer">
					Download My Resumé
				</a>
			</div>
			<div className="resume">
				<div style={{ display: "inline", float: "left" }}>
					<h3>Front-End Proficiencies</h3>
					<ol style={{ listStyleType: "decimal" }}>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>JQuery</li>
						<li>responsive design</li>
						<li>React</li>
						<li>Bootstrap</li>
					</ol>
				</div>
			</div>
			<div className="resume">
				<div style={{ display: "inline", float: "left" }}>
					<h3>Back-End Proficiencies</h3>

					<ol style={{ listStyleType: "decimal" }}>
						<li>APIs</li>
						<li>Node</li>
						<li>Express</li>
						<li>MySQL, Sequalize</li>
						<li>NoSQL</li>
						<li>MongoDB, Mongoose</li>
						<li>REST</li>
						<li>GraphQL</li>
					</ol>
				</div>
			</div>
		</section>
	);
}
