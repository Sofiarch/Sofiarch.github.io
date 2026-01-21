import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // 1. Add the base URL
  // Since your repo is "sofiarch.github.io", use '/'
  // (If your repo was named "my-project", you would use '/my-project/')
  base: "/", 
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})