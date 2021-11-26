import React, { useState } from "react";
import HeroSliderItem from "../Hero-Slider-Item/HeroSliderItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HeroSlider.style.scss";

const HeroSlider = () => {
	const ProductData = [
		{
			id: 1,
			name: "Ladies Items",
			img:
				"https://i.ibb.co/jvgQtt7/beautiful-young-woman-showing-pointing-white-background-1301-7232-removebg-preview.png",
			discount: "70",
		},
		{
			id: 1,
			name: "Fancy Hat's",
			img:
				"https://i.ibb.co/CnLjhM5/b3567ac85fb975b278a17ccda201486e-removebg-preview.png",
			discount: "55",
		},
	];
	const [state] = useState(ProductData);
	return (
		<div
			className="hero-area"
			style={{
				backgroundImage: `url('https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/pattern.png)`,
				backgroundSize: "cover",
				backgroundRepeat: "noRepeat",
				height: "550px",
			}}>
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
				customTransition="5s all fade-in-out"
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 1,
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
						items: 1,
						partialVisibilityGutter: 30,
					},
				}}
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable>
				{state.map((x, i) => (
					<HeroSliderItem key={i} item={x} />
				))}
			</Carousel>
		</div>
	);
};

export default HeroSlider;
