const jokecontainer = document.getElementById("jokes");
const jokebtn = document.getElementById("joke-button");

jokebtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokecontainer.innerHTML = data.value;
  } catch (err) {
    jokecontainer.innerHTML = "An error occurred while fetching the joke.";
    console.error(err);
  }
});
