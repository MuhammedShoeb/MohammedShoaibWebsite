import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 🧹 Removed lovable-tagger to stop visible tag from appearing in production

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // ❌ Removed lovable-tagger to prevent unwanted overlay or meta tag
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ Optional: ensure production build is clean
  build: {
    sourcemap: false,
    minify: "esbuild",
  },
}));
