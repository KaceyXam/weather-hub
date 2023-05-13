import { useEffect, useMemo, useState } from "react";
import { Forecast } from "./weatherTypes";
import Current from "./components/Current";
import NextWeek from "./components/NextWeek";

function App() {
	const [weather, setWeather] = useState<[Forecast]>();
	const [city, setCity] = useState<string>("Loading...");
	const [rangeMin, setRangeMin] = useState(1);
	const rangeMax = useMemo(() => rangeMin + 4, [rangeMin]);

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

	const increment = () => {
		setRangeMin((curr) => {
			if (weather?.length && curr == weather?.length - 1) return curr;
			return curr + 4;
		});
	};
	const decrement = () => {
		setRangeMin((curr) => {
			if (curr == 1) return curr;
			return curr - 4;
		});
	};

	return (
		<main className=" w-full bg-sky-blue grid items-center justify-center min-h-screen relative">
			{weather ? (
				<section className="max-w-xl mx-auto flex flex-col items-center gap-4 text-center">
					<section className="flex flex-col max-w-lg items-center justify-items-center bg-sky-blue text-white px-12 pt-8 pb-12 rounded-xl gap-2">
						<Current today={weather[0]} city={city} />
						<h2 className=" text-3xl mt-4 font-bold">Next Week Forecast</h2>
					</section>
					<div className="grid grid-cols-2 md:grid-cols-next-week items-center gap-2 text-white">
						<ul className="grid grid-cols-4 col-start-1 col-end-3 md:col-start-2 flex-wrap justify-center -mt-12 md:gap-4 gap-2">
							{weather.slice(rangeMin, rangeMax).map((forecast) => {
								return <NextWeek key={forecast.number} forecast={forecast} />;
							})}
						</ul>
						<button
							disabled={rangeMin === 1}
							className={`p-2 rounded bg-sky-blue disabled:bg-slate-500 col-start-1 md:row-start-1`}
							onClick={decrement}
						>
							{"<"}
						</button>
						<button
							disabled={rangeMin === weather.length - 1}
							className="p-2 rounded bg-sky-blue disabled:bg-slate-500"
							onClick={increment}
						>
							{">"}
						</button>
					</div>
				</section>
			) : (
				<h1 className=" text-3xl text-white">Loading...</h1>
			)}
			<img
				src="/background-img.png"
				className="absolute inset-0 w-full h-full -z-10"
				alt=""
			/>
		</main>
	);
}

export default App;
