import React from "react";
// import profilePicture from "../../assets/folio_cover/profilePicture.png";
import githubLogo from "../../../assets/logos/githubLogo.png"
import instaLogo from "../../../assets/logos/instaLogo.png"
import linkedInLogo from "../../../assets/logos/linkedInLogo.png"

function Footer() {
	return (
		<footer>
				<ul className="flex-row">
					<li className="mx-2 logos">
						<a href="https://github.com/cduwors">
                        <img src={githubLogo} alt="Link to my GitHub" height="64px"></img>
                        </a>
					</li>
					<li className="mx-2 logos">
						<a href="https://www.linkedin.com/in/christina-duwors-912903100/">
                        <img src={linkedInLogo} alt="Link to my LinkedIn" height="64px"></img>
                        </a>
					</li>
					<li className="mx-2 logos">
						<a href="https://www.instagram.com/christinaduwors/">
                        <img src={instaLogo} alt="Link to my Instagram" height="64px"></img>
                        </a>
					</li>
				</ul>
		</footer>
	);
}

export default Footer;