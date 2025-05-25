<template>
  <aside class="w-64 bg-gray-100 p-4 h-full border-r border-gray-300">
    <h2 class="text-xl font-semibold mb-4">Hi Komang</h2>
    <hr class="mb-4 border-gray-300" />

    <nav>
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="block p-2 rounded hover:bg-gray-200"
            :class="{ 'bg-gray-300 font-semibold': $route.path === '/' }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/pokemon-list"
            class="block p-2 rounded hover:bg-gray-200"
            :class="{ 'bg-gray-300 font-semibold': $route.path === '/pokemon-list' }"
          >
            Pokemon
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="block p-2 rounded hover:bg-gray-200"
            :class="{ 'bg-gray-300 font-semibold': $route.path === '/about' }"
          >
            About
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>
