import React from "react";
import Category from "../../components/Catagory/Catagory";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collection }) => {
	return (
		<div className="collection-overview">
			{collection.map((x, i) => (
				<Category key={i} title={x.title} item={x.items} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	collection: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
