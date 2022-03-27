import type Pokemon from "@/types/pokemon";

const api = "http://localhost:5000";

const updatePokemon = (pokemon: Pokemon) =>
  fetch(`${api}/pokemons/${pokemon.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
export default updatePokemon;
