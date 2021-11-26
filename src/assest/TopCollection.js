import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Item from "../Item/Item";
import TopCollectionItem from "../Top-Collection-Item/TopCollectionItem";
import SectionTitle from "../Title/SectionTitle";
import Carousel from "react-bootstrap/Carousel";

const TopCollection = () => {
	const ProductData = [
		{
			id: 1,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		},
		{
			id: 2,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_061_cast_iron_birds_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 3,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 4,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_104_nourished_journal_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 5,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		},
		{
			id: 6,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		}
	];
	const [index, setIndex] = useState(0);
	const [state] = useState(ProductData);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="top-collection">
			<SectionTitle inverse>Home Collection</SectionTitle>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{state.map((x, i) => (
					<Carousel.Item>
						<TopCollectionItem key={i} item={x} />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};
export default TopCollection;
