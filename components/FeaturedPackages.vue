<template>
  <section class="bg-gray-50 pt-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-4xl font-bold text-sky-500 mb-4">
          Featured Packages
        </h2>
        <p class="text-lg lg:text-xl text-gray-600">
          Handpicked travel experiences just for you
        </p>
      </div>

      <!-- Package Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <!-- Image Container with Badges -->
          <div class="relative h-48">
            <img
              :src="pkg.image"
              :alt="pkg.title"
              class="w-full h-full object-cover"
            />
            <!-- Discount Badge -->
            <div class="absolute top-4 left-4">
              <span
                class="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold"
              >
                {{ pkg.discount }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-3 lg:p-4">
            <!-- Title -->
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              {{ pkg.title }}
            </h3>

            <!-- Location -->
            <p class="text-gray-600 mb-2 text-xs lg:text-sm">
              {{ pkg.location }}
            </p>

            <!-- Duration and Max People -->
            <div
              class="flex items-center justify-between mb-2 text-sm text-gray-600"
            >
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>Max {{ pkg.maxPeople }}</span>
              </div>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-2 mb-2">
              <div class="flex items-center gap-1">
                <svg
                  class="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="font-bold text-gray-900">{{ pkg.rating }}</span>
              </div>
              <span class="text-sm text-gray-500"
                >({{ pkg.reviews }} reviews)</span
              >
            </div>

            <!-- Price -->
            <div class="mb-4">
              <p class="text-sm text-gray-500 line-through mb-1">
                ${{ pkg.originalPrice }}
              </p>
              <p class="text-3xl font-bold text-sky-500">${{ pkg.price }}</p>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    id: 1,
    title: "Bali Beach Paradise",
    location: "Bali, Indonesia",
    duration: "7 Days",
    maxPeople: 10,
    rating: 4.9,
    reviews: 145,
    originalPrice: 1299,
    price: 999,
    discount: "23% OFF",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    id: 2,
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration: "5 Days",
    maxPeople: 8,
    rating: 4.8,
    reviews: 98,
    originalPrice: 1599,
    price: 1299,
    discount: "19% OFF",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
  },
  {
    id: 3,
    title: "Japan Cultural Experience",
    location: "Tokyo & Kyoto",
    duration: "10 Days",
    maxPeople: 12,
    rating: 5,
    reviews: 203,
    originalPrice: 2499,
    price: 1999,
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 4,
    title: "Greek Islands Adventure",
    location: "Santorini, Greece",
    duration: "8 Days",
    maxPeople: 10,
    rating: 4.7,
    reviews: 87,
    originalPrice: 1799,
    price: 1499,
    discount: "17% OFF",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
  },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
