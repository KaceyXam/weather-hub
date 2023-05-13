function App() {
	return (
		<>
			<form>
				<input type="text" id="city" />
				<button type="submit">Fetch Weather</button>
			</form>
			<section className="weather-wrapper">
				<section>
					<img src="/vite.svg" alt="Weather Icon" />
					<div>
						<h2>Today</h2>
						<h1>City</h1>
						<p>Temperature</p>
						<p>Sky Conditions</p>
					</div>
				</section>
				<ul className="next-4-days">
					<li>
						<h3>tomorrow</h3>
						<img src="/vite.svg" alt="Weather Icon" />
						<p>Temperature</p>
					</li>
					<li>
						<h3>tomorrow</h3>
						<img src="/vite.svg" alt="Weather Icon" />
						<p>Temperature</p>
					</li>
					<li>
						<h3>tomorrow</h3>
						<img src="/vite.svg" alt="Weather Icon" />
						<p>Temperature</p>
					</li>
					<li>
						<h3>tomorrow</h3>
						<img src="/vite.svg" alt="Weather Icon" />
						<p>Temperature</p>
					</li>
				</ul>
			</section>
		</>
	);
}

export default App;
