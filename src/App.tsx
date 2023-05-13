import { useEffect, useState } from "react";
import { Forecast } from "./weatherTypes";
import Current from "./components/Current";
import NextWeek from "./components/NextWeek";

function App() {
	const [weather, setWeather] = useState<[Forecast]>();
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

	return (
		<main className=" w-full bg-blue-300 grid items-center justify-center min-h-screen">
			{weather ? (
				<section className="max-w-xl mx-auto flex flex-col items-center">
					<Current today={weather[0]} city={city} />
					<h2 className=" text-xl">Next Week</h2>
					<ul className="flex flex-wrap justify-center gap-4">
						{weather.map((forecast) => {
							// Ignore first forecast
							if (forecast.number != 1)
								return <NextWeek key={forecast.number} forecast={forecast} />;
						})}
					</ul>
				</section>
			) : (
				<h1 className=" text-3xl text-white">Loading...</h1>
			)}
		</main>
	);
}

export default App;
