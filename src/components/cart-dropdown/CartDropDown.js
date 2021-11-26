import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./CartDropDown.style.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((x, i) => (
					<CartItem key={i} item={x} />
				))}
			</div>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
