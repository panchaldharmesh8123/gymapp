import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>#100DaysOfWorkout</h4>
					<h1>Join The Legends of the Fitness World</h1>
					<p>
					Or else, unless they are adipisicing, they are falling into adipisicing. Or else, unless they are adipisicing, they are falling into adipisicing.
					</p>
						<a href="https://musclewiki.com/" className="btn lg">Get Started</a>
					
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
