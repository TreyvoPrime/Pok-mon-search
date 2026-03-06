// ── PROVIDED STARTER CODE — do not modify ──────────────────
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

let pokemonInput = document.getElementById("pokemonName");
let button = document.getElementById("searchButton");

button.addEventListener("click", handleSearch);

function handleSearch() {

  let value = pokemonInput.value.trim();
  let error = document.getElementById("errorMessage");
  let sprite = document.getElementById("pokemonSprite");

  sprite.style.display = "none";
  error.textContent = "";

  if (value === "") {
    error.textContent = "Please enter a Pokémon name.";
    return;
  }

  let regex = /^[a-zA-Z-]+$/;

  if (!regex.test(value)) {
    error.textContent = "Only letters and hyphens are allowed.";
    return;
  }

  if (value.length > 30) {
    error.textContent = "Name must be under 30 characters.";
    return;
  }
  fetchData();
}
