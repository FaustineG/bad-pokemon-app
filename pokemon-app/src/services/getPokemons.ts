import type Pokemon from "@/types/pokemon";

const api = "http://localhost:5000";

const getPokemons = (): Promise<Pokemon[]> =>
  fetch(`${api}/pokemons`).then((res) => res.json());

export default getPokemons;
