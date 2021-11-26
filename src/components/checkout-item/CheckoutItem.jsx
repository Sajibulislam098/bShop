import React from "react";
import "./checkout-item.style.scss";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { removeItemFromCart } from "../../redux/cart/cart.actions";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<span className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItemToCart(item)),
	removeItem: (item) => dispatch(removeItemFromCart(item)),
	clearItem: (item) => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
