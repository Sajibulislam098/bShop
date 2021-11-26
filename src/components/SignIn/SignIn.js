import React, { useState } from "react";
import "./SignIn.style.scss";
import CustomButton from "../Custom-Button/CustomButton";
import FormInput from "../Form-input/FormInput";
import { auth, signinWithGoogle } from "../../firebase/firebase.utlis";

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = formData;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setFormData({
				email: "",
				password: ""
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="SignIn">
			<h1 className="title">Already have an account ?</h1>
			<form onSubmit={(e) => onSubmit(e)}>
				<FormInput
					className="form-input"
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={(e) => onChangeHandler(e)}
				/>
				<FormInput
					className="form-input"
					name="password"
					type="password"
					placeholder=" Password"
					value={formData.password}
					onChange={(e) => onChangeHandler(e)}
				/>

				<div className="btn-wraper">
					<CustomButton type="submit">Login</CustomButton>
					<CustomButton btnGoogleAuth onClick={signinWithGoogle}>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
