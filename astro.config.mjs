import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import Icon from "astro-icon";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), Icon()],
});
