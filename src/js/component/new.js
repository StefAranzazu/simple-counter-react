export function SimpleCounter(props) {
	return (
		<div className="count d-flex justify-content-center">
			<div className="clock box">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.hundredThousand % 10}</div>
			<div className="five">{props.tenThousand % 10}</div>
			<div className="four">{props.thousand % 10}</div>
			<div className="three">{props.hundred % 10}</div>
			<div className="two">{props.ten % 10}</div>
			<div className="one">{props.unit % 10}</div>
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
			thousand={four}
			tenThousand={fith}
			hundredThousand={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);