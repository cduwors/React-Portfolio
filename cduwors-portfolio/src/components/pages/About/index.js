import React from "react";
import profilePicture from "../../../assets/folio_cover/profilePicture.png";

function About() {
	return (
		<section className="flex-row pageContentAbout">
			<div>
				<img className="profile" src={profilePicture} alt="Christina" />
				<h1 id="about">About Me!</h1>
				<p>
					seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion
					axe occupy readymade put a bird on it messenger bag Wes Anderson
					Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag
					trust fund Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO
					Banksy chillwave bicycle rights retro cliche tattooed bespoke irony
					mumblecore Shoreditch deep v polaroid McSweeney's bitters cray
					gentrify tofu Marfa you probably haven't heard of them yr banh mi
					asymmetrical art party selvage letterpress High Life.
				</p>
			</div>
		</section>
	);
}

export default About;
