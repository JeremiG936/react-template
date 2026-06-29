import React from "react";
import bannerLogo from "../../img/rickandmortylogo.png"

const NavBar = () => {
	return (
		<div id="nav-bar">
			<img src={bannerLogo} className="ms-3" id="banner-logo"/>
		</div>
	);
};

export default NavBar;