<script setup>
// Receive destination as a prop
defineProps({
  destination: {
    type: Object,
    required: true,
  },
});
</script>

<template>
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
  <div class="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
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
        <span class="text-xs md:text-sm">
          {{ destination.packages }} packages
        </span>
        <span
          class="sm:text-sm md:text-base lg:text-lg font-extrabold text-right"
        >
          <span class="text-xs font-light text-gray-300">From</span>
          ${{ destination.priceFrom }}
        </span>
      </div>
    </div>
  </div>
</template>
