import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
	return (
		<div className="header-wrapper">
			<h1>AB-It Solutions</h1>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				{/* <li>
					<NavLink to={"/about"}>About</NavLink>
				</li>
				<li>
					<NavLink to={"/courses"}>Course</NavLink>
				</li> */}
				<li>
					<NavLink to={"/personnel"}>Personnel</NavLink>
				</li>
				<li>
					<NavLink to={"/contact"}>Contact</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
