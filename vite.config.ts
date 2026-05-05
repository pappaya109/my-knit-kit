import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'My Knit-Kit',
        short_name: 'KnitKit',
        description: '나의 뜨개질 프로젝트 기록앱',
        theme_color: '#f2dada',
        background_color: '#fdf0f0',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        lang: 'ko',
        icons: [
          { src: 'pwa-64x64.png', sizes: '64x64', type: 'image/png' },
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /\.ttf$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
})
