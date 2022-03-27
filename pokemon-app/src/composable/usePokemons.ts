import getPokemons from "@/services/getPokemons";
import updatePokemon from "@/services/updatePokemon";
import type Pokemon from "@/types/pokemon";
import type { BaseProperty } from "@/types/pokemon";
import { ref } from "vue";

const usePokemons = () => {
  const pokemons = ref<Pokemon[]>([]);
  const loading = ref(false);

  const fetchPokemons = () => {
    loading.value = true;
    getPokemons()
      .then((p) => {
        pokemons.value = p;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const addPoint = (pokemon: Pokemon, property: keyof BaseProperty) => {
    const updatedPokemon = {
      ...pokemon,
      base: {
        ...pokemon.base,
        [property]: pokemon.base[property] + 1,
      },
    };
    return updatePokemon(updatedPokemon).then(() => {
      fetchPokemons();
    });
  };

  const removePoint = (pokemon: Pokemon, property: keyof BaseProperty) => {
    const updatedPokemon = {
      ...pokemon,
      base: {
        ...pokemon.base,
        [property]: pokemon.base[property] - 1,
      },
    };
    return updatePokemon(updatedPokemon).then(() => {
      fetchPokemons();
    });
  };

  return { pokemons, loading, fetchPokemons, addPoint, removePoint };
};
export default usePokemons;
