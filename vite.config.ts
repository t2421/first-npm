import path, { resolve } from "path";
import { defineConfig } from "vite";
const basedir = resolve(__dirname, "src");

export default defineConfig({
  root: ".",
  server: {
    host: "localhost",
    port: 8888,
  },
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Lib",
      fileName: (format) => `my-lib.${format}.js`,
    },
  },
});
