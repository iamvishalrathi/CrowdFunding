import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  build: {
    target: "esnext", // you can also use 'es2020' here
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // you can also use 'es2020' here
    },
  },
});
