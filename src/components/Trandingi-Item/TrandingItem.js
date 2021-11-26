import React from "react";
import "./TrandingItem.style.scss";

const TrandingItem = ({ item }) => {
	return (
		<div className="tranding-item">
			<div className="t-img">
				<img src={item.img} alt="" />
			</div>
			<div className="t-content">
				<h4>{item.name}</h4>
				<h6>{item.price}</h6>
			</div>
		</div>
	);
};

export default TrandingItem;
