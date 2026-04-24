import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";

export default defineConfig(({ mode }) => ({
  // React / jsx-runtime can emit `process.env.NODE_ENV` — not available in the browser IIFE
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "production" ? "production" : "development"
    ),
  },

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  build: {
    // Output inside plugin assets directory
    outDir: path.resolve(__dirname, "../assets"),

    // 🚨 IMPORTANT: don't wipe full folder
    emptyOutDir: false,

    // 🎯 library mode = no index.html
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "acowdpAdmin",
      formats: ["iife"], // browser-ready; must be a valid JS identifier
      fileName: () => "js/admin.js",
    },

    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith(".css")
            ? "css/admin.css"
            : "assets/[name]-[hash][extname]",
        // 🔥 force everything into ONE file
        inlineDynamicImports: true,
      },
    },
  },
}));