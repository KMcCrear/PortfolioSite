import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
	const [showLinks, setShowLinks] = useState(false);
	return (
		<div>
			<div className="Navbar">
				<div className="leftSide">
					<div className="links" id={showLinks ? "hidden" : ""}>
						<a href="/">Landing Page</a>
						<a href="/aboutme">About Me</a>
						<a href="/contact">Contact</a>
					</div>
					<button onClick={() => setShowLinks(!showLinks)}>
						<ReorderIcon />
					</button>
				</div>
				<div className="rightSide"></div>
			</div>
		</div>
	);
}
