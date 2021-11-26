import React from "react";
import "./SectionTitle.style.scss";

const SectionTitle = ({ inverse, children }) => {
	return (
		<div className={inverse ? "primary-title inverse" : "primary-title"}>
			<h1>{children}</h1>
		</div>
	);
};

export default SectionTitle;
