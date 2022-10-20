import React from "react";

export default function Project({ project }) {
	const { name, description, gitHubLink, deployedLink } = project;

	return (
		<div className="projectContent">
			<div className="card projectCard">
				<p>{description}</p>
				<a href={deployedLink}>{name}
                <img
					src={require(`../../../assets/projectPics/${name}.jpg`)}
					alt={name}
					className="projectPic"
				/></a> 
				<h6>
					<a href={gitHubLink}>GitHub</a>
				</h6>

				<div>
					{/* <h3>
						<a href={deployedLink}>{name}</a> <a href={gitHubLink}>GitHub</a>
					</h3>
					<p>{description}</p> */}
				</div>
			</div>
		</div>
	);
}
