import { defineConfig } from "astro/config";
import Icon from "astro-icon";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.trulynedum.dev",
  integrations: [tailwind(), Icon()],
});
