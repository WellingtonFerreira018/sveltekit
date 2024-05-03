import adapterAuto from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterAuto(),
  },
  preprocess: vitePreprocess(),
};
export default config;
