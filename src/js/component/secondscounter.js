import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Secondscounter(props) {
	let unit = 0;
	let ten = 0;
	let hundred = 0;
	let thousand = 0;
	let tenthousand = 0;
	let hundredthousand = 0;

	return (
		<div className="app d-flex justify-content-center">
			<div className="clock box">
				<i className="far fa-clock"></i>
			</div>
			<div className="counter box">{props.unit}</div>
			<div className="counter box">{props.ten}</div>
			<div className="counter box">{props.unit}</div>
			<div className="counter box">{props.hundred}</div>
			<div className="counter box">{props.thousand}</div>
			<div className="counter box">{props.hundredthousand}</div>
		</div>
	);
}
Secondscounter.PropTypes = {
	unit: PropTypes.string,
	ten: PropTypes.string,
	hundred: PropTypes.string,
	thousand: PropTypes.string,
	tenthousand: PropTypes.string,
	hundredthousand: PropTypes.string
};
Secondscounter.defaultProps = {
	unit: 0,
	ten: 0,
	hundred: 0,
	thousand: 0,
	tenthousand: 0,
	hundredthousand: 0
};
