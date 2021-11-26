import { createSelector } from "reselect";

const selectState = (state) => state.shop;

export const selectCollections = createSelector([selectState], (collection) => {
	return collection.collections;
});

export const selectCollection = (collectionUrlParam) => {
	return createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	);
};

export const selectCollectionForPreview = createSelector(
	[selectCollections],
	(collection) => Object.keys(collection).map((x) => collection[x])
);
