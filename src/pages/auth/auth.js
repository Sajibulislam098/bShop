import React from "react";
import "./auth.style.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/Sign-Up/SignUp";

const auth = () => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default auth;
