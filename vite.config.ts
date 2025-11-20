import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";
import tailwindcss from '@tailwindcss/vite'
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    commonjs(),
    tailwindcss(),
    viteTsConfigPaths({
      root: "../",
    }),
  ],
  resolve: {
    alias: {
      "@ui/*": "src/components/ui/*",
      "@components/*": "src/components/*",
      "@pages/*": "src/pages/*",
      "@consts/*": "src/consts/*",
      "@assets/*": "src/assets/*",
      "@services/*": "src/services/*",
      "@store/*": "src/store/*",
    },
  },
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
