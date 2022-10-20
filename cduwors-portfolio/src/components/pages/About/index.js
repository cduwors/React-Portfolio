import React from "react";
import profilePicture from "../../../assets/folio_cover/profilePicture.png";

function About() {
	return (
		<section className="flex-row pageContentAbout">
			<div>
				<img className="profile" src={profilePicture} alt="Christina" />
				<h1 id="about">About Me!</h1>
				<p>
					I am on a path to "re-boot" my career as a Full Stack Web Developer. Previously, I worked in education as a career counselor, a project manager, and a math and social studies teacher. This experience has honed my soft skills - most notably I am very good at time management, communication, problem-solving, and teamwork. My goal is to combine my diverse work experience and my work ethic with the new skills I have begun to build in the UNC-Chapel Hill Full Stack Web Developer Boot Camp.  In boot camp I was introduced to the full range of front and back end skills built on a Javascript foundation - I look forward to working on a fantastic team, with a great company to build my foundation into expertise.

					Check out my Portfolio and full Resumé and let's talk about how I can be an asset for you! 
				</p>
			</div>
		</section>
	);
}

export default About;
