<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <NuxtLink to="/" class="text-xl font-bold text-gray-800">My Nuxt App</NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-auto">
      <div class="container mx-auto px-4 py-4 text-center text-gray-600">
        © 2024 My Nuxt App
      </div>
    </footer>
  </div>
</template>
