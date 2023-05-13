import { Forecast } from "../weatherTypes";

export default function Current(props: { today: Forecast; city: string }) {
	return (
		<section>
			<img src={props.today?.icon} alt="Weather Icon" />
			<div>
				<h2>{props.today?.name}</h2>
				<h1>{props.city}</h1>
				<p>
					Temperature{" "}
					{`${props.today?.temperature}${props.today?.temperatureUnit}`}
				</p>
				<p>
					{props.today?.windSpeed} {props.today?.windDirection}
				</p>
			</div>
		</section>
	);
}
