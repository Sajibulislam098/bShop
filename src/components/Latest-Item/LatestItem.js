import React, { useState } from "react";
import "./LatestItem.style.scss";
import SectionTitle from "../Title/SectionTitle";
import Item from "../Item/Item";

const LatestItem = () => {
	const ProductData = [
		{
			id: 1,
			name: "Brown Brim",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
			price: "90",
		},
		{
			id: 2,
			name: "Adidas NMD",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
			price: "90",
		},
		{
			id: 3,
			name: "Crwo Byr",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
			price: "65",
		},
		{
			id: 4,
			name: "Black Jean Shearling",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
			price: "70",
		},
		{
			id: 5,
			name: "Blue Tanktop",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
			price: "40",
		},
		{
			id: 6,
			name: "Camo Down Vest",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
			price: "50",
		},
	];
	const [state] = useState(ProductData);
	return (
		<div className="latest">
			<SectionTitle>Latest Item</SectionTitle>
			<div className="latest-item">
				{state.map((x, i) => (
					<Item key={i} item={x} />
				))}
			</div>
		</div>
	);
};

export default LatestItem;
