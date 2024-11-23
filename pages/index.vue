<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
    <h1 class="text-4xl font-bold text-primary-600 mb-8">Welcome to Your Nuxt App</h1>
    
    <div class="flex gap-4">
      <NuxtLink 
        to="/theme" 
        class="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      >
        View Theme
      </NuxtLink>
    </div>
  </div>
</template>
