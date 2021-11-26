import React from "react";
import "./ELementTitle.style.scss";

const ElementTitle = ({ children }) => {
	return (
		<div className="element-title">
			<h2>{children}</h2>
		</div>
	);
};

export default ElementTitle;
