import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {
	const [projects] = useState([
		{
			name: "runBuddy",
			description: "HTML/CSS",
			gitHubLink: "#",
			deployedLink: "https://cduwors.github.io/run-buddy/",
		},
		{
			name: "holidayHiway",
			description: "MySQL/Node/Javascript/CSS",
			gitHubLink: "https://github.com/cduwors/holiday-hiway",
			deployedLink: "https://holiday-hiway.herokuapp.com/",
		},
		{
			name: "foodForThought",
			description: "HTML/Javascript/CSS/Materialize",
			gitHubLink: "#",
			deployedLink: "https://cduwors.github.io/food-for-thought/",
		},
		{
			name: "techBlog",
			description: "Node",
			gitHubLink: "#",
			deployedLink: "#",
		},
		{
			name: "eCommerce",
			description: "Sequelize/Express",
			gitHubLink: "#",
			deployedLink: "#",
		},
	]);
	return (
		<div>
			<div>
				{ projects.map((project, idx) => (
					<Project
					project={project}
					key={ "project" + idx } />
				))}
			</div>
		</div>
	);
}
