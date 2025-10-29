<script setup>
const destinations = [
  {
    id: 1,
    country: "Indonesia",
    city: "Bali",
    packages: 12,
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    id: 2,
    country: "France",
    city: "Paris",
    packages: 8,
    price: "$1199",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
  },
  {
    id: 3,
    country: "Japan",
    city: "Tokyo",
    packages: 15,
    price: "$1499",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 4,
    country: "Greece",
    city: "Santorini",
    packages: 10,
    price: "$1299",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
  },
];
</script>

<template>
  <div class="bg-gray-50 my-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-2xl lg:text-4xl font-bold text-sky-500 mb-4">
          Popular Destinations
        </h1>
        <p class="text-lg lg:text-xl text-gray-600">
          Explore the world's most beloved travel spots
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div
          v-for="destination in destinations"
          :key="destination.id"
          class="group relative h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0">
            <img
              :src="destination.image"
              :alt="destination.city"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div
            class="absolute inset-0 p-4 md:p-6 flex flex-col justify-between"
          >
            <!-- Location Badge -->
            <div class="flex items-center gap-2 text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">{{ destination.country }}</span>
            </div>

            <!-- City Info -->
            <div class="text-white">
              <h3 class="text-lg md:text-2xl lg:text-3xl font-bold mb-3">
                {{ destination.city }}
              </h3>
              <div class="flex items-center justify-between align-baseline">
                <span class="text-xs md:text-sm"
                  >{{ destination.packages }} packages</span
                >
                <span
                  class="sm:text-sm md:text-base lg:text-lg font-extrabold text-right"
                  ><span class="text-xs font-light text-gray-300">From</span>
                  {{ destination.price }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <button
          class="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 hover:underline font-semibold text-lg transition-colors duration-200"
        >
          View All Destinations
          <svg
            class="w-5 h-5"
            bl
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
        </button>
      </div>
    </div>
  </div>
</template>
