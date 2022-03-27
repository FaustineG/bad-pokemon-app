<script setup lang="ts">
import usePokemons from "../composable/usePokemons";
import Pokemon from "../types/pokemon";

const { pokemons, fetchPokemons, loading, addPoint, removePoint } = usePokemons();

const getDigits = (id) =>
  new Intl.NumberFormat("en-IN", {
    minimumIntegerDigits: 3,
  }).format(id);

const getPokemonImageUrl = (pokemon: Pokemon) => {
  const digits = getDigits(pokemon.id);

  return `http://localhost:5000/images/${digits}.png`;
};

const getPokemonSpriteUrl = (pokemon: Pokemon) => {
  const digits = getDigits(pokemon.id);

  return `http://localhost:5000/sprites/${digits}MS.png`;
};

const getPokemonThumbnailUrl = (pokemon: Pokemon) => {
  const digits = getDigits(pokemon.id);

  return `http://localhost:5000/thumbnails/${digits}.png`;
};

fetchPokemons();
</script>

<template>
  <main>
    <div v-if="loading">LOADING...</div>
    <div v-if="!loading && pokemons">
      {{ pokemons.length }} pokemons

      <table class="pokemon-table">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Nom (en)</th>
            <th>Nom (fr)</th>
            <th>Types</th>
            <th>Image</th>
            <th>Sprite</th>
            <th>Thumbnail</th>
            <template
              v-for="property in [
                'HP',
                'Attack',
                'Defense',
                'Sp. Attack',
                'Sp. Defense',
                'Speed',
              ]"
            >
              <!-- eslint-disable-next-line vue/require-v-for-key -->
              <th>{{ property }}</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <tr v-for="pokemon in pokemons">
            <td>{{ pokemon.id }}</td>
            <td>{{ pokemon.name?.english }}</td>
            <td>{{ pokemon.name?.french }}</td>
            <td>
              {{ pokemon.type?.toString() }}
            </td>
            <td><img :src="getPokemonImageUrl(pokemon)" /></td>
            <td><img :src="getPokemonSpriteUrl(pokemon)" /></td>
            <td><img :src="getPokemonThumbnailUrl(pokemon)" /></td>
            <template
              v-for="property in [
                'HP',
                'Attack',
                'Defense',
                'Sp. Attack',
                'Sp. Defense',
                'Speed',
              ]"
            >
              <!-- eslint-disable-next-line vue/require-v-for-key -->
              <td>
                <button @click="addPoint(pokemon, property)">+1</button>
                <button @click="removePoint(pokemon, property)">-1</button>
                {{ pokemon?.base && pokemon.base[property] }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
.pokemon-table {
  border-collapse: collapse;
}
.pokemon-table td {
  border: 1px solid black;
}
</style>