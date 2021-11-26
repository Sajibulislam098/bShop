import React, { useState } from "react";
import "./signup.style.scss";
import FormInput from "../Form-input/FormInput";
import CustomButton from "../Custom-Button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utlis";

const SignUp = () => {
	const [formData, setFormData] = useState({
		displayName: "",
		email: "",
		password: "",
		password2: ""
	});
	const { displayName, email, password, password2 } = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			alert("Password don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });
			setFormData({
				displayName: "",
				email: "",
				password: "",
				password2: ""
			});
		} catch (error) {
			console.log("Sign Up error", error.message);
		}
	};

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	return (
		<div className="sing-up">
			<h1 className="title">Create an Account</h1>
			<form onSubmit={(e) => onSubmit(e)}>
				<FormInput
					type="text"
					placeholder="Display Name"
					onChange={(e) => onChangeHandler(e)}
					name="displayName"
					value={formData.displayName}
				/>
				<FormInput
					type="email"
					placeholder="Email"
					onChange={(e) => onChangeHandler(e)}
					name="email"
					value={formData.email}
				/>
				<FormInput
					type="password"
					placeholder="Password"
					onChange={(e) => onChangeHandler(e)}
					name="password"
					value={formData.password}
				/>
				<FormInput
					type="password"
					placeholder="Re-Password"
					onChange={(e) => onChangeHandler(e)}
					name="password2"
					value={formData.password2}
				/>
				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
