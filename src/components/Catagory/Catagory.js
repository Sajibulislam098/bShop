import React from "react";
import Item from "../Item/Item";
import "./Catagory.style.scss";

const Category = ({ title, item }) => {
	return (
		<div className="category-item">
			<div className="title">
				<h1>{title}</h1>
			</div>
			<div className="items">
				{item.slice(0, 4).map((x, i) => (
					<Item key={i} item={x} />
				))}
			</div>
		</div>
	);
};

export default Category;
