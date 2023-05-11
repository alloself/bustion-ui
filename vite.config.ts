import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import pkg from './package.json'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    minify: "terser",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "bustion-ui",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `bui.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts"),
      },
      external: [...Object.keys(pkg.peerDependencies || {}), "vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "main.css") return "bui.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
