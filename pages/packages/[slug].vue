<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Loading State -->
    <div
      v-if="!packageData"
      class="flex items-center justify-center min-h-screen"
    >
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-16 w-16 border-b-2 border-sky-500 mx-auto mb-4"
        ></div>
        <p class="text-gray-600">Loading package details...</p>
      </div>
    </div>

    <!-- Package Not Found -->
    <div
      v-else-if="!packageData && !loading"
      class="flex items-center justify-center min-h-screen"
    >
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h2>
        <p class="text-gray-600 mb-6">
          The package you're looking for doesn't exist.
        </p>
        <button
          @click="navigateTo('/')"
          class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Package Details -->
        <div class="lg:col-span-2">
          <!-- Hero Image -->
          <div class="relative rounded-xl overflow-hidden h-96 mb-6">
            <img
              :src="packageData.image"
              :alt="packageData.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Package Title & Info -->
          <div class="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-md">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h1
                  class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
                >
                  {{ packageData.title }}
                </h1>
                <div class="flex items-center gap-2 text-gray-600">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{{ packageData.location }}</span>
                </div>
              </div>
            </div>

            <!-- Meta Info -->
            <div class="flex flex-wrap gap-6 text-gray-700 mb-6">
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-sky-500"
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
                <span>{{ packageData.duration }}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-sky-500"
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
                <span>Max {{ packageData.maxPeople }} people</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="font-bold">{{ packageData.rating }}</span>
                <span class="text-gray-500"
                  >({{ packageData.reviews }} reviews)</span
                >
              </div>
            </div>

            <!-- Tabs -->
            <div class="border-b border-gray-200 mb-6">
              <div class="flex gap-8 overflow-x-auto">
                <button
                  v-for="tab in tabs"
                  :key="tab"
                  @click="activeTab = tab"
                  :class="[
                    'pb-4 font-semibold transition-colors duration-200 whitespace-nowrap',
                    activeTab === tab
                      ? 'text-sky-600 border-b-2 border-sky-600'
                      : 'text-gray-500 hover:text-gray-700',
                  ]"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <!-- Tab Content -->
            <div v-if="activeTab === 'Overview'">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                About This Package
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ packageData.description }}
              </p>
            </div>

            <div v-if="activeTab === 'Itinerary'">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Daily Itinerary
              </h2>
              <div class="space-y-4">
                <div
                  v-for="(day, index) in packageData.itinerary"
                  :key="index"
                  class="border-l-4 border-sky-500 pl-4 py-2"
                >
                  <h3 class="font-bold text-gray-900 text-sm md:text-base">
                    Day {{ index + 1 }}: {{ day.title }}
                  </h3>
                  <p class="text-gray-600 text-sm md:text-base">
                    {{ day.description }}
                  </p>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'Included'">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                What's Included
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  v-for="item in packageData.included"
                  :key="item"
                  class="flex items-start gap-2"
                >
                  <svg
                    class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'Reviews'">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Customer Reviews
              </h2>
              <p class="text-gray-600">Reviews coming soon...</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Booking Card -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl p-6 shadow-md sticky top-8">
            <!-- Price -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-gray-500 line-through text-lg"
                  >${{ packageData.originalPrice }}</span
                >
                <span
                  class="bg-red-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs md:text-sm font-bold"
                >
                  {{ packageData.discount }}
                </span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-bold text-sky-500"
                  >${{ packageData.price }}</span
                >
                <span class="text-gray-500">per person</span>
              </div>
            </div>

            <!-- Booking Form -->
            <form @submit.prevent="handleBooking" class="space-y-4">
              <!-- Travel Date -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date
                </label>
                <input
                  v-model="bookingForm.date"
                  type="date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <!-- Number of Persons -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Persons
                </label>
                <input
                  v-model.number="bookingForm.persons"
                  type="number"
                  min="1"
                  :max="packageData.maxPeople"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <!-- Book Now Button -->
              <button
                type="submit"
                class="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 shadow-md cursor-pointer"
              >
                Book Now
              </button>
            </form>

            <!-- Cancellation Policy -->
            <p class="text-sm text-gray-500 text-center mt-4">
              Free cancellation up to 48 hours before departure
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { getPackageBySlug } = usePackages();

const activeTab = ref("Overview");
const tabs = ["Overview", "Itinerary", "Included", "Reviews"];
const loading = ref(true);
const packageData = ref(null);

const bookingForm = ref({
  date: "",
  persons: 1,
});

// Fetch package data based on slug
onMounted(() => {
  const slug = route.params.slug;
  packageData.value = getPackageBySlug(slug);
  loading.value = false;

  // If package not found, you could redirect or show 404
  if (!packageData.value) {
    console.error("Package not found:", slug);
  }
});

const handleBooking = () => {
  console.log("Booking:", {
    package: packageData.value.title,
    ...bookingForm.value,
  });
  // Add booking logic here
  // Example: navigateTo('/booking-confirmation')
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
