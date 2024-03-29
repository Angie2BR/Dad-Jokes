const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click", generateJoke);

generateJoke();

//Async Await:

async function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const res = await fetch("https://icanhazdadjoke.com", config);

	const data = await res.json();

	joke.innerHTML = data.joke;
}
