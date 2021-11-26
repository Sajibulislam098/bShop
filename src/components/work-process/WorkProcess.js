import React from "react";
import "./work-process.style.scss";

const WorkProcess = () => {
	return (
		<div className="work-process">
			<div className="process-card">
				<i className="fa fa-shopping-cart"></i>
				<h1>Free Shipping</h1>
				<p>
					I am text block. Click edit button to change this text. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
					nec ullamcorper mattis, pulvinar dapibus leo.
				</p>
			</div>
			<div className="process-card">
				<i className="fas fa-globe"></i>
				<h1>Worldwide</h1>
				<p>
					I am text block. Click edit button to change this text. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
					nec ullamcorper mattis, pulvinar dapibus leo.
				</p>
			</div>
			<div className="process-card">
				<i className="fas fa-dollar-sign"></i>
				<h1>30-day Money Back</h1>
				<p>
					I am text block. Click edit button to change this text. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
					nec ullamcorper mattis, pulvinar dapibus leo.
				</p>
			</div>
		</div>
	);
};

export default WorkProcess;
