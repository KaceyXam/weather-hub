import { Forecast } from "../weatherTypes";

export default function Current(props: { today: Forecast; city: string }) {
	return (
		<>
			<h1 className="text-5xl font-bold">{props.city}</h1>
			<div className="grid grid-cols-2  items-center justify-items-center">
				<img className="w-8/12" src={props.today?.icon} alt="Weather Icon" />
				<div className="flex items-center flex-col text-xl">
					<h2 className="text-2xl font-semibold">{props.today?.name}</h2>
					<p>
						{`Temperature ${props.today?.temperature}${props.today?.temperatureUnit}`}
					</p>
					<p>
						{props.today?.windSpeed} {props.today?.windDirection}
					</p>
				</div>
			</div>
		</>
	);
}
