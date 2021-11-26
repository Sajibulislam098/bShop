import React, { Fragment } from "react";
import "./menuItem.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ item, history, match }) => {
	const { img, name, linkUrl } = item;
	return (
		<Fragment>
			<div
				className="menu-item"
				onClick={() => history.push(`${match.url}${linkUrl}`)}>
				<div
					className="background-img"
					style={{
						backgroundImage: `url(${img})`,
						backgroundSize: `cover`,
					}}>
					<div className="content">
						<div className="title">{name}</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default withRouter(MenuItem);
