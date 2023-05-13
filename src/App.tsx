import { useEffect, useState } from "react";
import { Forecast } from "./weatherTypes";
import Current from "./components/Current";
import NextWeek from "./components/NextWeek";

function App() {
	const [weather, setWeather] = useState<[Forecast]>();
	const [today, setToday] = useState<Forecast>();
	const [city, setCity] = useState<string>("Loading...");

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			let lat = position.coords.latitude;
			let long = position.coords.longitude;

			let data = await fetch(`https://api.weather.gov/points/${lat}%2C${long}`);
			let json = await data.json();
			setCity(json.properties.relativeLocation.properties.city);
			let newData = await fetch(json.properties.forecast);
			let newJson = await newData.json();
			setWeather(newJson.properties.periods);
		});
	}, []);

	useEffect(() => {
		if (weather) {
			setToday(weather[0]);
		}
	}, [weather]);

	return (
		<>
			{weather && today ? (
				<section className="weather-wrapper">
					<Current today={today} city={city} />
					<ul className="forecast">
						{weather.map((forecast) => (
							<NextWeek key={forecast.number} forecast={forecast} />
						))}
					</ul>
				</section>
			) : (
				<h1 className=" text-3xl">Loading...</h1>
			)}
		</>
	);
}

export default App;
