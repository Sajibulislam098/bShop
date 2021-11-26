import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assest/shopping-bag.svg";
import "./CartIcon.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";

const CartIcon = ({ itemCount, plusIcon, totalQuantity, ...otherProps }) => {
	return (
		<div className="shopping-icon">
			<ShoppingIcon className="icon" />
			{plusIcon ? <span className="plus-icon">+</span> : ""}
			{itemCount ? <span className="item-count">{totalQuantity}</span> : ""}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	totalQuantity: selectCartItemsQuantity
});

export default connect(mapStateToProps)(CartIcon);
