import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ["src/**/*.js", "src/**/*.jsx"], // Make sure only the correct paths are linted
      exclude: ["registerSW.js"], // Exclude the problematic file
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "HakimX Digials ",
        short_name: "HakimX",
        description:
          "HakimX Healthcare Digital marketing is a team of multidisciplinary proffessionals helping healtcare service providers available online enabling clients to make informed decisions for a healthier life. ",
        theme_color: "#ffffff",
        screenshots: [
          {
            src: "homel.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "homes.png",
            sizes: "320x640",
            type: "image/png",
          },
          {
            src: "servicesl.png",
            sizes: "1280x720",
            type: "image/png",
          },
          {
            src: "teaml.png",
            sizes: "1280x720",
            type: "image/png",
          },
          {
            src: "teams.png",
            sizes: "320x640",
            type: "image/png",
          },
        ],
        icons: [
          { src: "icon-256.png", sizes: "256x256", type: "image/png" },
          { src: "icon-512.png", sizes: "256x256", type: "image/png" },
        ],
        start_url: "/",
        display: "standalone",
        id: "/",
        background_color: "#ffffff",
        scope: "/",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/hakim-x\.vercel\.app\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400, // 1 day
              },
            },
          },
          {
            // Cache all other requests (e.g., images, styles)
            urlPattern: /\.(?:png|jpg|jpeg|svg|css|js)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "asset-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
