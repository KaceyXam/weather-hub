import { Forecast } from "../weatherTypes";

export default function NextWeek(props: { forecast: Forecast }) {
	return (
		<li key={props.forecast.number}>
			<h3>{props.forecast.name}</h3>
			<img src={props.forecast.icon} alt="Weather Icon" />
			<p>
				{props.forecast.temperature}
				{props.forecast.temperatureUnit}
			</p>
		</li>
	);
}
