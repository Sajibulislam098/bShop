import React, { Fragment } from "react";
import MenuItem from "../Menu-Item/MenuItem";
import "./directory.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
	return (
		<Fragment>
			<div className="directory">
				{sections.map((x, i) => (
					<MenuItem key={i} item={x} />
				))}
			</div>
		</Fragment>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
