<template>
  <div class="min-h-screen p-8 bg-gray-100">
    <h1 class="text-4xl font-bold mb-8">Tailwind Test</h1>
    
    <!-- Basic Tailwind Classes -->
    <div class="space-y-4">
      <!-- Text Colors -->
      <div class="space-y-2">
        <p class="text-blue-500">This should be blue text</p>
        <p class="text-red-500">This should be red text</p>
        <p class="text-green-500">This should be green text</p>
      </div>

      <!-- Backgrounds -->
      <div class="space-y-2">
        <div class="p-4 bg-blue-200">Blue background</div>
        <div class="p-4 bg-red-200">Red background</div>
        <div class="p-4 bg-green-200">Green background</div>
      </div>

      <!-- Test our theme colors -->
      <div class="space-y-2">
        <div class="p-4 bg-primary-500 text-white">Primary Color</div>
        <div class="p-4 bg-secondary-500 text-white">Secondary Color</div>
        <div class="p-4 bg-accent-500 text-white">Accent Color</div>
      </div>
    </div>
  </div>
</template>
