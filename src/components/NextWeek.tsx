import { Forecast } from "../weatherTypes";

export default function NextWeek(props: { forecast: Forecast }) {
	return (
		<li
			className="flex flex-col items-center bg-sky-blue text-white px-2 py-3 rounded-lg"
			key={props.forecast.number}
		>
			<img className="" src={props.forecast.icon} alt="Weather Icon" />
			<h3 className="md:text-xl md:font-semibold text-center">
				{props.forecast.name}
			</h3>
			<p>
				{props.forecast.temperature}
				{props.forecast.temperatureUnit}
			</p>
		</li>
	);
}
