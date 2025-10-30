<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
</script>

<template>
  <Analytics />
  <div class="bg-gray-50 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
