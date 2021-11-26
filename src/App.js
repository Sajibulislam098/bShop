import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home-Page/HomePage";
import ShopPage from "./pages/Shop-Page/ShopPage";
import AuthPage from "./pages/auth/auth";
import Footer from "./components/Footer/Footer";

import { setCurrentUser } from "./redux/user/user.action";

// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utlis";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";

class App extends Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userRef = await createUserProfileDocument(user);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(user);
			}
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/auth"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
						}
					/>
				</Switch>
				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
