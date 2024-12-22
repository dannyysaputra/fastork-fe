import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: "Fastwork",
    short_name: "Fastwork",
    description: "Job portal platform with screening resume AI",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugin)],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})