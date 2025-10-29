<template>
  <section class="bg-sky-600 py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-2xl lg:text-4xl font-bold text-white mb-4">
          Why Choose TravelHub
        </h2>
        <p class="text-lg lg:text-xl text-white/80">
          Your journey starts with the right travel partner
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.id" class="text-center">
          <!-- Icon -->
          <div class="flex justify-center mb-6">
            <div
              class="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="feature.iconPath"
                />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-4">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/90 leading-relaxed text-sm">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: "Best Price Guarantee",
    description:
      "We offer competitive prices and exclusive deals you won't find elsewhere",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Our travel experts are always available to help you plan your perfect trip",
    iconPath:
      "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    id: 3,
    title: "Trusted & Safe",
    description:
      "We partner with verified providers to ensure your safety and satisfaction",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: 4,
    title: "Easy Booking",
    description:
      "Simple booking process with instant confirmation and flexible payment options",
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
