import React from "react";
import "./TopCollectionItem.style.scss";
import CartIcon from "../Cart-Icon/CartIcon";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

const TopCollectionItem = ({ item, addItem }) => {
	return (
		<div className="item">
			<div
				className="item-bg"
				style={{
					backgroundImage: `url(${item && item.imageUrl})`,
					backgroundSize: "cover",
				}}>
				<h2 className="item-title">
					{item && item.name} <span>{item && item.catagory}</span>
				</h2>
				<div className="item-footer">
					<div className="price">{item && item.price}</div>
					<div className="cart" onClick={() => addItem(item)}>
						<CartIcon plusIcon />
					</div>
				</div>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(TopCollectionItem);
