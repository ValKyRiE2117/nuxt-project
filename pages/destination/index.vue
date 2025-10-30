<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-sky-500 to-indigo-500 py-10 md:py-16 px-4"
    >
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Discover Destinations
        </h1>
        <p
          class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md mb-8"
        >
          Explore amazing places around the world
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Where do you want to go?"
              class="w-full pl-12 pr-3 py-2 lg:pr-4 lg:py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
            />
            <svg
              class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Grid -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <!-- Results Count -->
      <p class="text-gray-600 mb-8">
        {{ filteredDestinations.length }} destination{{
          filteredDestinations.length !== 1 ? "s" : ""
        }}
        found
      </p>

      <!-- No Results -->
      <div v-if="filteredDestinations.length === 0" class="text-center py-12">
        <svg
          class="w-20 h-20 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">
          No destinations found
        </h3>
        <p class="text-gray-600">Try adjusting your search terms</p>
      </div>

      <!-- Destination Cards Grid -->
      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
      >
        <div
          v-for="destination in paginatedDestinations"
          :key="destination.id"
          class="group relative h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          @click="goToDestination(destination)"
        >
          <DestinationCard :destination="destination" />
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2">
        <!-- Previous Button -->
        <button
          @click="currentPage > 1 && currentPage--"
          :disabled="currentPage === 1"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-sky-500 hover:text-white shadow',
          ]"
        >
          Previous
        </button>

        <!-- Page Numbers -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            currentPage === page
              ? 'bg-sky-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-sky-100 shadow',
          ]"
        >
          {{ page }}
        </button>

        <!-- Next Button -->
        <button
          @click="currentPage < totalPages && currentPage++"
          :disabled="currentPage === totalPages"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors duration-200',
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-sky-500 hover:text-white shadow',
          ]"
        >
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 12; // 4 columns × 3 rows

const { destinations } = useDestinations();

// Filter destinations based on search query
const filteredDestinations = computed(() => {
  if (!searchQuery.value) {
    return destinations;
  }
  const query = searchQuery.value.toLowerCase();
  return destinations.filter(
    (dest) =>
      dest.city.toLowerCase().includes(query) ||
      dest.country.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query)
  );
});

// Calculate total pages
const totalPages = computed(() => {
  return Math.ceil(filteredDestinations.value.length / itemsPerPage);
});

// Get paginated destinations
const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDestinations.value.slice(start, end);
});

// Reset to page 1 when search query changes
const resetPagination = () => {
  currentPage.value = 1;
};

// Watch search query
const unwatchSearch = computed(() => {
  resetPagination();
  return searchQuery.value;
});

const goToDestination = (destination) => {
  console.log("Navigate to:", destination.city);
  // Add navigation logic here
  // Example: navigateTo(`/destinations/${destination.city.toLowerCase()}`)
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
