<template>
  <MainLayout>
    <h2 class="text-2xl font-semibold mb-4">Pokemon List</h2>
    
    <!-- Grid -->
    <div class="p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        class="bg-white hover:bg-gray-100 transition transform active:scale-95 duration-150 ease-in-out cursor-pointer rounded shadow-lg h-48"
      >
        <router-link to="/pokemon-add">
          <img :src="pokemon.image || 'https://cdn-icons-png.flaticon.com/512/419/419467.png'" :alt="pokemon.name" class="w-full h-3/4 object-contain" />
          <p class="text-center mt-2 capitalize">{{ pokemon.name }}</p>
        </router-link>
      </div>
    </div>

    <!-- Pagination -->
    <div >
        <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @change="goToPage"
        />
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import Pagination from '../components/Pagination.vue'
import { fetchPokemonList } from '../services/pokemonListService'

const pokemons = ref([])
const totalCount = ref(0)
const currentPage = ref(1)
const pageSize = 20
const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const loadPokemons = async () => {
  const offset = (currentPage.value - 1) * pageSize
  try {
    const { pokemons: list, count } = await fetchPokemonList(pageSize, offset)
    pokemons.value = list
    totalCount.value = count
  } catch (error) {
    console.error('Could not load Pokémon:', error)
  }
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    loadPokemons()
  }
}

onMounted(loadPokemons)
</script>
