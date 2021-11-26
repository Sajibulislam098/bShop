import React from "react";
import "./form-input.style.scss";

const FormInput = ({ ...otherprops }) => {
	return (
		<div className="group">
			<input className="form-input" {...otherprops} />
		</div>
	);
};

export default FormInput;
