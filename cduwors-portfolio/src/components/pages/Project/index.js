import React from "react";

export default function Project({ project }) {
	const { name, title, description, gitHubLink, deployedLink } = project;

	return (
		<div className="projectContent">
			<div className="card">
				<h5>{title}</h5>
                <p>{description}</p>
				<a href={deployedLink}>
                <img
					src={require(`../../../assets/projectPics/${name}.jpg`)}
					alt={name}
					className="projectPic"
				/></a> 
				<h6>
					<a href={gitHubLink}>GitHub</a>
				</h6>
			</div>
		</div>
	);
}
