import { createSelector } from "reselect";

const selectState = (state) => state.directory;

export const selectDirectorySections = createSelector(
	[selectState],
	(section) => section.sections
);
