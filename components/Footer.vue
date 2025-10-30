<template>
  <footer class="bg-slate-900 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center"
            >
              <svg
                class="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">TravelHub</span>
          </div>
          <p class="text-gray-400 leading-relaxed text-sm">
            Your trusted partner for unforgettable travel experiences around the
            world.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-base font-bold text-white mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-400 hover:text-sky-500 transition-colors duration-200 text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-base font-bold text-white mb-4">Support</h3>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-400 hover:text-sky-500 transition-colors duration-200 text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-base font-bold text-white mb-4">Contact</h3>
          <div class="space-y-3 mb-6">
            <p class="text-gray-400">
              <span class="font-medium text-sm">Email:</span> info@travelhub.com
            </p>
            <p class="text-gray-400">
              <span class="font-medium text-sm">Phone:</span> +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800">
        <p class="text-center text-gray-400">
          © {{ currentYear }} TravelHub. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "#" },
  { name: "Destinations", url: "/destination" },
];

const supportLinks = [
  { name: "FAQ", url: "/faq" },
  { name: "Contact Us", url: "/contact" },
  { name: "Terms & Conditions", url: "/terms" },
  { name: "Privacy Policy", url: "/privacy" },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
