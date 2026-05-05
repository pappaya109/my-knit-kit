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
      includeAssets: ['icon.svg', 'BMKkubulimTTF.ttf'],
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
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
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
