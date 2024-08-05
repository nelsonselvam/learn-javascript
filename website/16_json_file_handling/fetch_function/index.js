/* fetch()

    - function used for making HTTP requests to fethc resources
    (JSON style data, images, files)
    Simplifies asynchronous data fetching in Javascript and used for interacting
    with APIs to retrieve and send data asynchronously over the web.
    fetch(url,{method: "", .....})


*/

async function fetchPokemon() {
  try {

    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      // pokemonImg.src = "";
      // pokemonImg.style.display = "block";
      throw Error("Something went wrong");
    }

    const data = await response.json();

    // console.log(data);

    const imgSrc = data["sprites"]["front_default"];
    const pokemonImg = document.getElementById("pokemonImg");

    pokemonImg.src = imgSrc;
    pokemonImg.style.display = "block";

  } catch (error) {
    console.log(error);
  }
}

fetchPokemon();
