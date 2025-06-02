import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  outDir: "dist",
  target: "node16",

  // This is the key part for path aliases
  esbuildOptions(options) {
    options.alias = {
      "@": "./src",
    };
  },
});
