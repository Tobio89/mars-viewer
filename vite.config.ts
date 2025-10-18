import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    commonjs(),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],
  esbuild: {
    target: "ESNext",
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      plugins: [commonjs()],
    },
    sourcemap: true,
  },
});
