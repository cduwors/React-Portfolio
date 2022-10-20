import React from "react";
import pdf from "../../../assets/resume2021.pdf";

export default function Resume() {
	return (
		<section className="wrapper pageContent">
			<div className="resumeHead">
				<div>
					<h3 style={{ color: "orange" }}>My Resumé</h3>
				</div>
				<div>
					<a href={pdf} target="_blank" rel="noreferrer">
						(Download my full Resumé)
					</a>
				</div>
			</div>
			<div className="flex-row resume">
				<div>
					<div style={{ display: "inline", float: "left", padding: "30px" }}>
						<h4>Front-End Experience</h4>
						<ol style={{ listStyleType: "disc" }}>
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
				<div>
					<div style={{ display: "inline", float: "left", padding: "30px" }}>
						<h4>Back-End Experience</h4>

						<ol style={{ listStyleType: "disc" }}>
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
			</div>
		</section>
	);
}
