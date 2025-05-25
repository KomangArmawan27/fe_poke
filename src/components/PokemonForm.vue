<template>
  <form class= "max-w-md w-full mx-auto space-y-4">
    <h2 class="text-2xl font-semibold text-gray-800">Favorite this Pokémon</h2>

    <!-- Name -->
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Pokémon Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        value="Pikachu"
        placeholder="e.g. Pikachu"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled
      />
    </div>

    <!-- Type -->
    <div>
      <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Pokémon Type</label>
      <input
        type="text"
        id="type"
        v-model="type"
        value="Dragon"
        placeholder="e.g. Dragon"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled
      />
    </div>

    <!-- Notes -->
    <div>
      <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Notes</label>
      <textarea
        id="notes"
        v-model="notes"
        rows="3"
        placeholder="Any special traits or memories..."
        class="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div>
      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
      >
        Save Pokémon
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const type = ref('')
const notes = ref('')
</script>
