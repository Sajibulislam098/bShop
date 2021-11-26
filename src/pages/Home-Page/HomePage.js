import React from "react";
import Directory from "../../components/Directory/Directory";
import "./HomePage.style.scss";
import LatestItem from "../../components/Latest-Item/LatestItem";
import TopCollection from "../../components/Top-Collection/TopCollection";
import HeroSlider from "../../components/Hero-Slider/HeroSlider";
import WorkProcess from "../../components/work-process/WorkProcess";

const HomePage = () => {
	return (
		<div className="home-page">
			<HeroSlider />
			<Directory />
			<LatestItem />
			<TopCollection />
			<WorkProcess />
		</div>
	);
};

export default HomePage;
