<script setup>
const { destinations } = useDestinations();
const popularDestinations = destinations.slice(0, 4);
</script>

<template>
  <div class="bg-gray-50 my-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-4xl font-bold text-sky-500 mb-4">
          Popular Destinations
        </h2>
        <p class="text-lg lg:text-xl text-gray-600">
          Explore the world's most beloved travel spots
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div
          v-for="destination in popularDestinations"
          :key="destination.id"
          class="group relative h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <DestinationCard :destination="destination" />
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <NuxtLink
          to="/destination"
          class="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 hover:underline font-semibold text-lg transition-colors duration-200"
        >
          View All Destinations
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
