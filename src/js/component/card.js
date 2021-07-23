import React from "react";
import PropTypes from "prop-types";

export function Card(Cardprops) {
	return (
		<div>
			<div className="card">
				<img
					src={Cardprops.imgUrl}
					className="card-img-top"
					alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">{Cardprops.title}</h5>
					<p className="card-text">{Cardprops.text}</p>
					<a href={Cardprops.link} className="btn btn-primary">
						{Cardprops.buttontext}
					</a>
				</div>
			</div>
		</div>
	);
}
Card.PropTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	buttontext: PropTypes.string,
	link: PropTypes.string
};

Card.defaultProps = {
	imgUrl:
		"https://i.pinimg.com/564x/fc/12/a4/fc12a4e4f5dcb7f467e7e3a67740a145.jpg",
	title: "Default title",
	text: "Some random text",
	buttontext: "Ver",
	link: "#"
};
