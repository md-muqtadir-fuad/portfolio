import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import Sitemap from 'vite-plugin-sitemap'; // [1] Import the plugin

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  // portfolio sections for Google crawler
  const routes = ['/', '/projects', '/publications', '/achievements', '/projects', '/experience', '/contact']; 

  return {
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({ 
        hostname: 'https://md-muqtadir-fuad.vercel.app', // [2] Your Vercel URL
        dynamicRoutes: routes, // [3] Tells the plugin which pages to index
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});