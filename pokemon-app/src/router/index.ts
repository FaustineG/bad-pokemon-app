import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/Pokemons.vue'
import PokemonView from '../views/Pokemon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemons',
      component: PokemonsView
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: PokemonView
    }
  ]
})

export default router
