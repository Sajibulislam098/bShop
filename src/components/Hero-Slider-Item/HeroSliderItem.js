import React from "react";
import "./HeroSliderItem.style.scss";

const HeroSliderItem = ({ item }) => {
	return (
		<div className="hero-slide">
			<div className="slide-img">
				<img src={item.img} alt="" />
			</div>
			<div className="slide-content">
				<h1>{item.name}</h1>
				<span>{item.discount}% OFF </span>
			</div>
		</div>
	);
};

export default HeroSliderItem;
