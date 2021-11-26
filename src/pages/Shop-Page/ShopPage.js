import React from "react";
import "./shop-page.style.scss";
import CollectionOverview from "../../components/colleaction-overview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection-page/CollectionPage";

const ShopPage = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionID`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
