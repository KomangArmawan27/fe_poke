import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import PokemonList from '../views/PokemonList.vue'
import AddPokemon from '../views/AddPokemon.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/pokemon-list', name: 'PokemonList', component: PokemonList },
  { path: '/pokemon-add', name: 'AddPokemon', component: AddPokemon },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
