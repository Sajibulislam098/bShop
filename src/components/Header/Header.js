import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/4.4 crown.svg.svg";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { auth } from "../../firebase/firebase.utlis";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectToggleHidden } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Header = ({ currentUser, toggleCartHidden, hidden }) => {
	return (
		<div className="header">
			<div className="logo">
				<Link to="/">
					<Logo /> <span>BISHOP</span>
				</Link>
			</div>
			<div className="options">
				<div className="option">
					<Link to="/Shop">Shop</Link>
				</div>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Sign out
					</div>
				) : (
					<div className="option">
						<Link to="/auth">Sign In</Link>
					</div>
				)}
				<div className="option" onClick={toggleCartHidden}>
					<CartIcon itemCount />
				</div>
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectToggleHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
