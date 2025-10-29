<template>
  <nav class="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 lg:w-12 lg:h-12 bg-sky-500 rounded-xl flex items-center justify-center"
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
        <h1 class="text-xl lg:text-2xl font-bold text-gray-700">TravelHub</h1>
      </div>

      <!-- CTA Button & Mobile Menu Toggle -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-3 text-center transition-colors duration-200"
        >
          Pesan Sekarang
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-200"
          aria-controls="navbar-sticky"
          :aria-expanded="isMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger Icon -->
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
          <!-- Close Icon -->
          <svg
            v-else
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Navigation Menu -->
      <div
        :class="[
          'items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300',
          isMenuOpen ? 'block' : 'hidden',
        ]"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
        >
          <li v-for="item in menuItems" :key="item.name">
            <a
              :href="item.url"
              @click="isMenuOpen = false"
              :class="[
                'block py-2 px-3 rounded-sm transition-colors duration-200',
                item.active
                  ? 'text-white bg-sky-500 md:bg-transparent md:text-sky-500 md:p-0 font-bold'
                  : 'text-gray-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0',
              ]"
              :aria-current="item.active ? 'page' : undefined"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const menuItems = [
  { name: "Home", url: "/", active: true },
  { name: "Tentang Kami", url: "#", active: false },
  { name: "Jelajah Paket", url: "#", active: false },
];
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
