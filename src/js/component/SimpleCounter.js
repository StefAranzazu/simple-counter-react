import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function SimpleCounter(props) {
	return (
		<div className="count d-flex justify-content-center">
			<div className="clock box">
				<i className="far fa-clock"></i>
			</div>
			<div className="six box">{props.hundredThousand % 10}</div>
			<div className="five box">{props.tenThousand % 10}</div>
			<div className="four box">{props.thousand % 10}</div>
			<div className="three box">{props.hundred % 10}</div>
			<div className="two box">{props.ten % 10}</div>
			<div className="one box">{props.unit % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	hundredThousand: PropTypes.number,
	tenThousand: PropTypes.number,
	thousand: PropTypes.number,
	hundred: PropTypes.number,
	ten: PropTypes.number,
	unit: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 1000);
	const fith = Math.floor(counter / 1000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<SimpleCounter
			unit={one}
			ten={two}
			hundred={three}
			thousand={four}
			tenThousand={fith}
			hundredThousand={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
