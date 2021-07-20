import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div>
			<div className="card">
				<img
					src={props.imgUrl}
					className="card-img-top"
					alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href={props.link} className="btn btn-primary">
						{props.buttontext}
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
