import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/ico.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto soluta ea excepturi, ipsam inventore et quos, ex illum asperiores ullam blanditiis expedita dolore nam iste incidunt nemo ab. Eius, sequi?
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com/in/eniola-ademola-7386161a7/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://facebook.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/_daveworld"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://instagram.com/_daveworld"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/">Blog</Link>
					<Link to="/">Case Studies</Link>
					<Link to="/">Events</Link>
					<Link to="/contact">Communities</Link>
					<Link to="/about">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Dharmesh,Krunal And Karan </small>
			</div>
		</footer>
	);
};

export default Footer;
