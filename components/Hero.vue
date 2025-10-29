<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        alt="Beautiful beach destination"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 w-full">
      <!-- Headline -->
      <div class="text-center mb-12">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Explore Indonesia's Beauty
        </h1>
        <p
          class="text-lg md:text-xl text-white/80 max-w-3xl mx-auto drop-shadow-md"
        >
          Discover your dream destination at the best price. An unforgettable
          travel experience awaits you!
        </p>
      </div>

      <!-- Search Box -->
      <div class="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-2xl mx-auto">
        <form
          @submit.prevent="handleSearch"
          class="flex flex-col md:flex-row gap-4"
        >
          <!-- Destination Input -->
          <div class="flex-1 relative">
            <label for="destination" class="sr-only">Destination</label>
            <div class="relative">
              <svg
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                id="destination"
                v-model="searchQuery"
                type="text"
                placeholder="Where do you want to go?"
                class="w-full pl-12 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <!-- Search Button -->
          <button
            type="submit"
            class="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm"
          >
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search Destination
          </button>
        </form>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("Searching for:", searchQuery.value);
    // Add your search logic here
    // Example: navigateTo(`/destinations?q=${searchQuery.value}`)
  }
};

const quickSearch = (destination) => {
  searchQuery.value = destination;
  handleSearch();
};
</script>

<style scoped>
/* Additional custom animations if needed */
</style>
