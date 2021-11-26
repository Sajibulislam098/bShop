import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, btnGoogleAuth, ...otherProps }) => {
	return (
		<button
			className={`custom-btn ${btnGoogleAuth ? "btnGoogleAuth" : ""}`}
			{...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
