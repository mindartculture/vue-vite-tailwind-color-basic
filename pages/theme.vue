<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-4xl font-bold mb-8">Theme Viewer</h1>
    
    <!-- Color Sections -->
    <div class="space-y-12">
      <!-- Primary Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Primary Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-primary-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('primary', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Secondary Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Secondary Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-secondary-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('secondary', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Accent Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Accent Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-accent-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('accent', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Success Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Success Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-success-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('success', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Warning Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Warning Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-warning-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('warning', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Error Colors -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">Error Colors</h2>
        <div class="grid grid-cols-11 gap-2">
          <template v-for="shade in ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']" 
               :key="shade">
            <div class="space-y-2">
              <div :class="`h-16 w-full bg-error-${shade} rounded-lg shadow-sm`"></div>
              <p class="text-sm text-center">{{ shade }}</p>
              <p class="text-xs text-center text-gray-500">{{ getColorValue('error', shade) }}</p>
            </div>
          </template>
        </div>
      </section>

      <!-- Example Components -->
      <section class="space-y-8">
        <h2 class="text-2xl font-semibold mb-4">Example Components</h2>
        
        <!-- Buttons -->
        <div class="space-y-4">
          <h3 class="text-xl font-medium">Buttons</h3>
          <div class="flex gap-4">
            <button class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              Primary Button
            </button>
            <button class="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors">
              Secondary Button
            </button>
            <button class="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors">
              Accent Button
            </button>
          </div>
        </div>

        <!-- Alerts -->
        <div class="space-y-4">
          <h3 class="text-xl font-medium">Alerts</h3>
          <div class="space-y-2">
            <div class="p-4 bg-success-100 text-success-800 border border-success-200 rounded-lg">
              Success Alert Message
            </div>
            <div class="p-4 bg-warning-100 text-warning-800 border border-warning-200 rounded-lg">
              Warning Alert Message
            </div>
            <div class="p-4 bg-error-100 text-error-800 border border-error-200 rounded-lg">
              Error Alert Message
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div class="space-y-4">
          <h3 class="text-xl font-medium">Cards</h3>
          <div class="grid grid-cols-3 gap-4">
            <div class="p-6 bg-white rounded-lg shadow-md border border-primary-100">
              <h4 class="text-lg font-medium text-primary-900 mb-2">Primary Card</h4>
              <p class="text-primary-600">Sample content for the card.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border border-secondary-100">
              <h4 class="text-lg font-medium text-secondary-900 mb-2">Secondary Card</h4>
              <p class="text-secondary-600">Sample content for the card.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md border border-accent-100">
              <h4 class="text-lg font-medium text-accent-900 mb-2">Accent Card</h4>
              <p class="text-accent-600">Sample content for the card.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },
  accent: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
    950: '#4c0519',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
}

const getColorValue = (colorName, shade) => {
  return colors[colorName][shade]
}
</script>
