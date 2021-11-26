import React, { useState } from "react";
import TopCollectionItem from "../Top-Collection-Item/TopCollectionItem";
import SectionTitle from "../Title/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopCollection = () => {
	const ProductData = [
		{
			id: 102,
			name: "Blue Beanie",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
			price: "70",
		},
		{
			id: 1092,
			name: "Adidas Yeezy",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
			price: "50",
		},
		{
			id: 3213,
			name: "Blue Jean Jacket",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
			price: "80",
		},
		{
			id: 3214,
			name: "Floral Blouse",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
			price: "90",
		},
		{
			id: 3125,
			name: "Pink T-shirt",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
			price: "40",
		},
		{
			id: 3216,
			name: "White Blouse",
			catagory: "Home",
			imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
			price: "90",
		},
	];
	const [state] = useState(ProductData);
	return (
		<div className="top-collection">
			<SectionTitle inverse>Top Collection</SectionTitle>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				centerMode={false}
				className=""
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={true}
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				customTransition="3s ease-in-out"
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 4,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable>
				{state.map((x, i) => (
					<TopCollectionItem key={i} item={x} />
				))}
			</Carousel>
		</div>
	);
};

export default TopCollection;
