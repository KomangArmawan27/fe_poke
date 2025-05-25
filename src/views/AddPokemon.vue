<template>
  <MainLayout>
    <div class="flex p-2">
      <img src="https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-list-6895600_640.png" alt="Pokemon Placeholder" class="w-2/4 h-auto object-contain ">
      <PokemonForm />
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import PokemonForm from '../components/PokemonForm.vue'
</script>
