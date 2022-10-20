import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {
	const [projects] = useState([
		{
			name: "holidayHiway",
			title: "Holiday Hi-Way",
			description: "MySQL/Node/Javascript/CSS",
			gitHubLink: "https://github.com/cduwors/holiday-hiway",
			deployedLink: "https://holiday-hiway.herokuapp.com/",
		},
		{
			name: "foodForThought",
			title: "Food For Thought",
			description: "HTML/Javascript/CSS/Materialize",
			gitHubLink: "#",
			deployedLink: "https://cduwors.github.io/food-for-thought/",
		},
		//need to finish techBlog and deploy
		{
			name: "techBlog",
			title: "My Tech Blog",
			description: "Node",
			gitHubLink: "https://github.com/cduwors/my-tech-blog",
			deployedLink: "#",
		},
		{
			name: "eCommerce",
			title: "Retail Back End",
			description: "Sequelize/Express",
			gitHubLink: "https://github.com/cduwors/retail-backend-mod13",
			deployedLink: "https://drive.google.com/file/d/1tXFiaW9vJeVRiOPuv2vrOi9Nca7hfqMx/view",
		},
		{
			name: "teamProfileGenerator",
			title: "Team Profile Generator",
			description: "OOP/Node/HTML",
			gitHubLink: "https://github.com/cduwors/team-profile-generator",
			deployedLink: "https://drive.google.com/file/d/1Bsm5Ss_UfDPkkDcluiUVM7j_1YaufR6b/view",
		},
		{
			name: "runBuddy",
			title: "Run Buddy",
			description: "HTML/CSS",
			gitHubLink: "#",
			deployedLink: "https://cduwors.github.io/run-buddy/",
		},
	]);
	return (
		<div>
			<div className="projectList">
				{ projects.map((project, idx) => (
					<Project
					project={project}
					key={ "project" + idx } />
				))}
			</div>
		</div>
	);
}
