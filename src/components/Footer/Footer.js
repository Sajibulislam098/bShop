import React from "react";
import "./footer.style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-cards">
					<div className="footer-card">
						<h1>Home</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
					<div className="footer-card">
						<h1>Office</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
					<div className="footer-card">
						<h1>Children</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
					<div className="footer-card">
						<h1>Wall</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
					<div className="footer-card">
						<h1>Magazine</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
					<div className="footer-card">
						<h1>Outdoor</h1>
						<Link to="/">Decor</Link>
						<Link to="/">Lamps</Link>
						<Link to="/">Blinds</Link>
						<Link to="/">Wall Art</Link>
					</div>
				</div>
				<hr />
				<div className="bottom-area">
					<div className="social-icon">
						<Link to="/">
							{" "}
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link to="/">
							{" "}
							<i className="fab fa-twitter"></i>
						</Link>
						<Link to="/">
							{" "}
							<i className="fab fa-google"></i>
						</Link>
						<Link to="/">
							{" "}
							<i className="fab fa-github-alt"></i>
						</Link>
					</div>
					<div className="copy-right">
						© Copyright 2020 ·{" "}
						<a href="https://www.fb.com/jobayerdev">Jobayer Hossain</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
