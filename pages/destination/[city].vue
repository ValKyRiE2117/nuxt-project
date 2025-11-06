<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Back Button -->
        <NuxtLink
          to="/destination"
          class="inline-flex items-center gap-2 text-white hover:text-white/80 mb-6 transition-colors duration-200"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Destinations
        </NuxtLink>

        <div class="flex items-center gap-3 text-white mb-4">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 class="text-4xl md:text-5xl font-bold">
            {{ destinationData?.city }}, {{ destinationData?.country }}
          </h1>
        </div>
        <p class="text-xl text-white/90">Explore amazing travel packages</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Filters -->
        <aside class="lg:col-span-1">
          <div class="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Filters</h2>

            <!-- Search Packages -->
            <div class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Search Packages
              </label>
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search packages..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <svg
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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

            <!-- Category Filter -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-700 mb-3">Category</h3>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value="all"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">All</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value="beach"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">Beach</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value="adventure"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">Adventure</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value="cultural"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">Cultural</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedCategory"
                    type="radio"
                    value="city-tour"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">City Tour</span>
                </label>
              </div>
            </div>

            <!-- Price Range -->
            <div class="mb-6">
              <h3 class="text-sm font-semibold text-gray-700 mb-3">
                Price Range
              </h3>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    value="all"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">All Prices</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    value="0-1000"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">Under $1000</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    value="1000-1500"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">$1000 - $1500</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    value="1500-2000"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">$1500 - $2000</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="selectedPriceRange"
                    type="radio"
                    value="2000+"
                    class="w-4 h-4 text-sky-500 focus:ring-sky-500"
                  />
                  <span class="ml-2 text-gray-700">Over $2000</span>
                </label>
              </div>
            </div>

            <!-- Clear Filters -->
            <button
              @click="clearFilters"
              class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </aside>

        <!-- Packages List -->
        <div class="lg:col-span-3">
          <!-- Results Count -->
          <p class="text-gray-600 mb-6">
            {{ filteredPackages.length }} package{{
              filteredPackages.length !== 1 ? "s" : ""
            }}
            found
          </p>

          <!-- No Results -->
          <div
            v-if="filteredPackages.length === 0"
            class="text-center py-12 bg-white rounded-2xl"
          >
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
              No packages found
            </h3>
            <p class="text-gray-600">
              Try adjusting your filters or search terms
            </p>
          </div>

          <!-- Package Cards -->
          <div v-else class="space-y-6">
            <div
              v-for="pkg in filteredPackages"
              :key="pkg.id"
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                  <!-- Discount Badge -->
                  <span
                    class="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3"
                  >
                    {{ pkg.discount }}
                  </span>

                  <!-- Title -->
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">
                    {{ pkg.title }}
                  </h3>

                  <!-- Location -->
                  <p class="text-gray-600 mb-4">{{ pkg.location }}</p>

                  <!-- Meta Info -->
                  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div class="flex items-center gap-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{{ pkg.duration }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Max {{ pkg.maxPeople }}</span>
                    </div>
                  </div>

                  <!-- Rating -->
                  <div class="flex items-center gap-2 mb-4">
                    <svg
                      class="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span class="font-bold text-gray-900">{{
                      pkg.rating
                    }}</span>
                    <span class="text-gray-500">({{ pkg.reviews }})</span>
                  </div>

                  <!-- Price -->
                  <div class="flex items-baseline gap-2 mb-4">
                    <span class="text-gray-500 line-through text-lg"
                      >${{ pkg.originalPrice }}</span
                    >
                    <span class="text-3xl font-bold text-sky-500"
                      >${{ pkg.price }}</span
                    >
                  </div>
                </div>
              </div>

              <!-- View Details Button -->
              <button
                @click="goToPackage(pkg)"
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { packages, createSlug } = usePackages();
const { getDestinationByCity } = useDestinations();

const searchQuery = ref("");
const selectedCategory = ref("all");
const selectedPriceRange = ref("all");
const destinationData = ref(null);

// Get destination data
onMounted(() => {
  const citySlug = route.params.city;
  destinationData.value = getDestinationByCity(citySlug);
});

// Filter packages by location
const locationPackages = computed(() => {
  if (!destinationData.value) return [];

  return packages.filter((pkg) => {
    const pkgCity = pkg.location.split(",")[0].trim().toLowerCase();
    return pkgCity === destinationData.value.city.toLowerCase();
  });
});

// Apply filters
const filteredPackages = computed(() => {
  let filtered = locationPackages.value;

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (pkg) =>
        pkg.title.toLowerCase().includes(query) ||
        pkg.description.toLowerCase().includes(query)
    );
  }

  // Price range filter
  if (selectedPriceRange.value !== "all") {
    filtered = filtered.filter((pkg) => {
      const price = pkg.price;
      switch (selectedPriceRange.value) {
        case "0-1000":
          return price < 1000;
        case "1000-1500":
          return price >= 1000 && price <= 1500;
        case "1500-2000":
          return price > 1500 && price <= 2000;
        case "2000+":
          return price > 2000;
        default:
          return true;
      }
    });
  }

  return filtered;
});

const clearFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "all";
  selectedPriceRange.value = "all";
};

const goToPackage = (pkg) => {
  const slug = createSlug(pkg.title);
  navigateTo(`/packages/${slug}`);
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
