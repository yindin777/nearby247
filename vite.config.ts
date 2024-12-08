import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this matches the output_dir in wrangler.toml
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
