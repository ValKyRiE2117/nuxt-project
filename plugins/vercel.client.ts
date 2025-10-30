// plugins/vercel.client.ts
import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  // Inject Vercel Analytics script
  inject();
});
