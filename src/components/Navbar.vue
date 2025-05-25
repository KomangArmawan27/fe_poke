<template>
  <header class="bg-white shadow p-4 flex justify-between items-center sticky">
    <h1 class="text-xl font-bold"><router-link to="/">My Pokemon</router-link></h1>
    <nav>
      <ul class="flex">
        <li><router-link to="/" class="text-gray-700 hover:bg-gray-100 transition transform active:scale-95 duration-150 ease-in-out cursor-pointer px-4 py-2 rounded">Home</router-link></li>
        <li><router-link to="/pokemon-list" class="text-gray-700 hover:bg-gray-100 transition transform active:scale-95 duration-150 ease-in-out cursor-pointer px-4 py-2 rounded">Pokemon</router-link></li>
        <li><router-link to="/about" class="text-gray-700 hover:bg-gray-100 transition transform active:scale-95 duration-150 ease-in-out cursor-pointer px-4 py-2 rounded">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>
