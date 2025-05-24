<template>
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">My App</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="text-gray-700 hover:text-blue-500">Home</router-link></li>
        <li><router-link to="/about" class="text-gray-700 hover:text-blue-500">About</router-link></li>
        <li><router-link to="/dashboard" class="text-gray-700 hover:text-blue-500">Dashboard</router-link></li>
      </ul>
    </nav>
  </header>
</template>
